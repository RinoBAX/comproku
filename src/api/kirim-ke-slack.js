
export default async function handler(request, response) {
  // Pastikan hanya metode POST yang diterima
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { nama, email, pesan } = request.body;

  // Ambil URL Webhook dari Environment Variable (lebih aman)
  const SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/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";

  if (!SLACK_WEBHOOK_URL) {
    return response.status(500).json({ message: 'Webhook URL tidak dikonfigurasi' });
  }

  // Format pesan yang akan dikirim ke Slack
  const slackMessage = {
    text: `🔔 Pesan Baru dari Website PT. Bax Digital Indonesia!`,
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
          { type: 'mrkdwn', text: `*Email:*\n${email}` },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Pesan:*\n${pesan}`,
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
      throw new Error(`Error dari Slack: ${slackResponse.statusText}`);
    }

    return response.status(200).json({ message: 'Pesan berhasil dikirim!' });
  } catch (error) {
    console.error('Error saat mengirim ke Slack:', error);
    return response.status(500).json({ message: 'Gagal mengirim pesan.' });
  }
}