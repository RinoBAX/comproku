export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { nama, email, telepon, subjek, pesan } = request.body;

  const SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/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";

  if (!SLACK_WEBHOOK_URL) {
    console.error('SLACK_WEBHOOK_URL tidak ditemukan di environment variables');
    return response.status(500).json({ message: 'Webhook URL tidak dikonfigurasi di server.' });
  }

  const slackMessage = {
    text: `🔔 Pesan Baru dari Website: ${subjek}`,
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
          { type: 'mrkdwn', text: `*Email:*\n<mailto:${email}|${email}>` },
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
          text: `*Pesan:*\n\`\`\`${pesan}\`\`\``,
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