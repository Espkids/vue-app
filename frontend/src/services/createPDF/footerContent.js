export default {
  footerContent () {
    return [
      {
        margin: [0, -10],
        columns: [
          {
            width: 'auto',
            stack: [
              { text: '- ຖ້າລະບົບໃດໜຶ່ງບໍ່ຜ່ານ ແມ່ນເອົາໄປສ້ອມແປງຄືນແລ້ວເອົາມາກວດໃໝ່.\n- If some system failed, it must be to repaired then inspect that system again', fontSize: 7.5, lineHeight: 1 },
              { qr: 'https://www.google.com/', fit: '100', alignment: 'center', margin: [0, 10] }
            ]
          },
          [
            {
              image: 'data:image/jpeg;base64,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',
              fit: [200, 250],
              alignment: 'center'
            }
          ]
        ],
        columnGap: 10
      },
      {
        columns: [
          '',
          '',
          {
            margin: [0, 10],
            text: 'ວັນທີ: xx/xx/xxxx xx:xx',
            fontSize: 10,
            alignment: 'center'
          }
        ]
      },
      {
        margin: [0, -5],
        columns: [
          {
            width: '*',
            text: 'ຜູ້ກວດກາຕົວຈິງ\n(Inspector)\n\n...xxxx...',
            fontSize: 10,
            alignment: 'center'
          },
          {
            width: '*',
            text: 'ບ່ອນກວດສະພາບເຕັກນິກ\n(Technical Inspection)\n\n...xxxx...',
            fontSize: 10,
            alignment: 'center'
          },
          {
            width: '*',
            text: 'ຫົວໜ້າກອງຄຸ້ມຄອງພາຫະນະ\n(Chief of vehicle management division)\n\nທ່ານ .................................',
            fontSize: 10,
            alignment: 'center'
          }
        ]
      }
    ]
  }
}
