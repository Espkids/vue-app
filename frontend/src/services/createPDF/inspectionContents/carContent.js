export default {
  carContent (data) {
    return [
      {
        margin: [0, 10],
        // row 1
        columns: [
          // column 1
          {
            width: 100,
            stack: [
              { text: 'ຊື່ເຈົ້າຂອງລົດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.name, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Name)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 100,
            stack: [
              { text: 'ທີ່ຢູ່', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.address, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Address)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 3
          {
            width: 100,
            stack: [
              { text: 'ບ້ານ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.village, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Village)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 4
          {
            width: 100,
            stack: [
              { text: 'ເມືອງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.district, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Distrcit)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 5
          {
            width: 100,
            stack: [
              { text: 'ເບີໂທລະສັບ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.telephone, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Telephone)', fontSize: 8, margin: [0, 10] }
            ]
          }
        ],
        columnGap: 10,
        relativePosition: { x: 0, y: 0 }
      },
      {
        margin: [0, 11],
        // row 2
        columns: [
          // column 1
          {
            width: 100,
            stack: [
              { text: 'ທະບຽນ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.registration_no, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Registration No)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 100,
            stack: [
              { text: 'ຍີ່ຫໍ້', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.brand, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Brand)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 3
          {
            width: 100,
            stack: [
              { text: 'ລຸ້ນ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.model, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Model)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 4
          {
            width: 100,
            stack: [
              { text: 'ສີ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.color, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Color)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 5
          {
            width: 100,
            stack: [
              { text: 'ພວງມມະໄລ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.steering_wheel, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Steering Wheel)', fontSize: 8, margin: [0, 10] }
            ]
          }
        ],
        columnGap: 10,
        relativePosition: { x: 0, y: 0 }
      },
      {
        margin: [0, 11],
        // row 3
        columns: [
          // column 1
          {
            width: 100,
            stack: [
              { text: 'ໃຊ້ນໍ້າມັນ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.fuel, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Fuels)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 100,
            stack: [
              { text: 'ຈຳນວນສູບ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.cylinder, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Cylinder)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 3
          {
            width: 100,
            stack: [
              { text: 'ຄວາມແຮງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.cylinder_cc, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Cylinder CC) (cc)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 4
          {
            width: 100,
            stack: [
              { text: 'ເລກຈັກ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.engine_no, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Engine No)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 5
          {
            width: 100,
            stack: [
              { text: 'ເລກຖັງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: data.chassic_no, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Chassic No)', fontSize: 8, margin: [0, 10] }
            ]
          }
        ],
        columnGap: 10,
        relativePosition: { x: 0, y: 0 }
      },
      {
        margin: [0, 11],
        // row 4
        columns: [
          // column 1
          {
            width: 100,
            stack: [
              { text: 'ລວງກ້ວາງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: `${data.width} ມມ`, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Width) (mm)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 100,
            stack: [
              { text: 'ລວງຍາວ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: `${data.length} ມມ`, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Length) (mm)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 3
          {
            width: 100,
            stack: [
              { text: 'ລວງສູງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: `${data.height} ມມ`, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Height) (mm)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 4
          {
            width: 200,
            stack: [
              { text: 'ຈຳນວນບ່ອນນັ່ງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: `${data.seat} ບ່ອນນັ່ງ`, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [60, 0, 0, 0] },
              { text: '(Passenger Scats) (Scats)', fontSize: 8, margin: [0, 10] }
            ]
          }
        ],
        columnGap: 10,
        relativePosition: { x: 0, y: 0 }
      },
      {
        margin: [0, 11],
        // row 5
        columns: [
          // column 1
          {
            width: 100,
            stack: [
              { text: 'ນຳ້ໜັກລົດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: `${data.weight} ກິໂລ`, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Vehicle Weight) (Kg)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 100,
            stack: [
              { text: 'ນຳ້ໜັກບັນທຸກ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: `${data.max_load} ກິໂລ`, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Max Loading) (Kg)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 3
          {
            width: 100,
            stack: [
              { text: 'ນຳ້ໜັກລວມ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: `${data.total_weight} ກິໂລ`, fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 }, margin: [50, 0, 0, 0] },
              { text: '(Total Weight) (Kg)', fontSize: 8, margin: [0, 10] }
            ]
          }
        ],
        columnGap: 10,
        relativePosition: { x: 0, y: 0 }
      }
    ]
  }
}
