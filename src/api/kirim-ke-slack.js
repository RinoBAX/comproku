// File: src/api/kirim-ke-slack.js

export default async function handler(request, response) {
  // 1. Pastikan hanya metode POST yang diterima
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  // 2. Ambil SEMUA data dari body request
  const { nama, email, telepon, subjek, pesan } = request.body;

  // 3. Ambil URL Webhook dari Environment Variable (INI CARA YANG AMAN)
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

  if (!SLACK_WEBHOOK_URL) {
    console.error('SLACK_WEBHOOK_URL tidak ditemukan di environment variables');
    return response.status(500).json({ message: 'Webhook URL tidak dikonfigurasi di server.' });
  }

  // 4. Format pesan Slack untuk menyertakan semua data
  const slackMessage = {
    text: `🔔 Pesan Baru dari Website: ${subjek}`, // Fallback text untuk notifikasi
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '🔔 Pesan Baru dari Website!',
          emoji: true,
        },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Nama:*\n${nama}` },
          { type: 'mrkdwn', text: `*Email:*\n<mailto:${email}|${email}>` }, // Membuat email bisa diklik
        ],
      },
      {
        type: 'section',
        fields: [
            { type: 'mrkdwn', text: `*Telepon (WA):*\n${telepon}` },
            { type: 'mrkdwn', text: `*Subjek:*\n${subjek}` },
        ]
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Pesan:*\n\`\`\`${pesan}\`\`\``, // Menggunakan block code untuk pesan yang lebih panjang
        },
      },
      { type: 'divider' },
    ],
  };

  try {
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      const errorBody = await slackResponse.text();
      throw new Error(`Error dari Slack: ${slackResponse.status} ${errorBody}`);
    }

    return response.status(200).json({ message: 'Pesan berhasil dikirim!' });
  } catch (error) {
    console.error('Error saat mengirim ke Slack:', error);
    return response.status(500).json({ message: 'Gagal mengirim pesan ke Slack.' });
  }
}