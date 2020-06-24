export default {
  inspectionContent () {
    return [
      {
        // row 1
        margin: [0, 20],
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: '1. ລະບົບສົ່ງທິດ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: '(Streering Device)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 100,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ແວ່ນສ່ອງຫລັງ,ຂ້າງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Handier)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                  ]
                },
                {
                  margin: [0, 5],
                  canvas: [
                    {
                      type: 'polyline',
                      lineWidth: 1,
                      closePath: true,
                      points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                    }
                  ]
                }
              ]
            ],
            columnGap: -5
          },
          {
            text: 'asdasdasfa'
          }
        ],
        columnGap: 10,
        relativePosition: { x: 0, y: 0 }
      },
      {
        // row 2
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: '6. ການກະຈາຍຂອງອາຍເສັຍ, ຄັວນດຳ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: '(Emission Limit)', fontSize: 8, margin: [0, 10] }
            ]
          }
        ],
        columnGap: 10,
        relativePosition: { x: 0, y: 0 }
      }
    ]
  }
}
