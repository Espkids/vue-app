export default {
  inspectionContent () {
    return [
      { text: 'ໝາຍເຫດ', fontSize: 10, alignment: 'right' },
      {
        // row 1
        margin: [0, 5],
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
            width: 95,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ພວງມະໄລ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
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
          // column 3
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ຄັນສົ່ງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Am/Rod)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 4
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ຕັ້ງລໍ້', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Side Slip)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // ໝາຍເຫດ
          [
            { text: 'X', fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 1.2 } }, // O = -15, X = -17
            {
              margin: [0, 5, 4.5, 0],
              alignment: 'right',
              canvas: [
                {
                  type: 'polyline',
                  lineWidth: 1,
                  closePath: true,
                  alignment: 'right',
                  points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                }
              ]
            }
          ]
        ],
        columnGap: 2.5,
        relativePosition: { x: 0, y: 0 }
      },
      {
        // row 2
        margin: [0, 17.5],
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: '2. ລະບົບຫ້າມ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: '(Braking Device)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 95,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ຜາງຕີນ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Pedal)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 3
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ທໍ່ນໍ້າມັນເບກ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Hose/Pipe)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 4
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ເຕົ້ານໍ້າມັນເບກ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Reservoir Tank)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // ໝາຍເຫດ
          [
            { text: 'X', fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 1.2 } }, // O = -15, X = -17
            {
              margin: [0, 5, 4.5, 0],
              alignment: 'right',
              canvas: [
                {
                  type: 'polyline',
                  lineWidth: 1,
                  closePath: true,
                  alignment: 'right',
                  points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                }
              ]
            }
          ]
        ],
        columnGap: 2.5,
        relativePosition: { x: 0, y: 0 }
      },
      {
        // row 3
        margin: [0, 5],
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: '3. ລະບົບຊັດທ່ຽງ (ສູນລໍ້):', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: '(Punning Device)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 95,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ລົມຢາງຕີນລົດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Tire)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 3
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ຕີນລົດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Wheel)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 4
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ນ໋ອດລໍ້', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Bolt/Nut)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // ໝາຍເຫດ
          [
            { text: 'X', fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 1.2 } }, // O = -15, X = -17
            {
              margin: [0, 5, 4.5, 0],
              alignment: 'right',
              canvas: [
                {
                  type: 'polyline',
                  lineWidth: 1,
                  closePath: true,
                  alignment: 'right',
                  points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                }
              ]
            }
          ]
        ],
        columnGap: 2.5,
        relativePosition: { x: 0, y: 0 }
      },
      {
        // row 4
        margin: [0, 17.5],
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: '4. ລະບົບສັ່ນສະເທືອນ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: '(Chock Absorber)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 95,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ຊົກອັບ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Chock Absorber)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 3
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ໄສ້ເສືອ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Spring)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // ໝາຍເຫດ
          [
            { text: 'X', fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 1.2 } }, // O = -15, X = -17
            {
              margin: [0, 5, 4.5, 0],
              alignment: 'right',
              canvas: [
                {
                  type: 'polyline',
                  lineWidth: 1,
                  closePath: true,
                  alignment: 'right',
                  points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                }
              ]
            }
          ]
        ],
        columnGap: 2.5,
        relativePosition: { x: 0, y: 0 }
      },
      {
        // row 5
        margin: [0, 5],
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: '5. ລະບົບເຄື່ອງຈັກ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: '(Prime Move)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 95,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ໝໍ້ກອງອາກາດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Air cleaner)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 3
          {
            width: 60,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ສາຍພານ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Fan Belt)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 4
          {
            width: 60,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ໝໍ້ນໍ້າ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Radiator)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 5
          {
            width: 68,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ຄາບິວ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Carburator)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 6
          {
            width: 65,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ປໍ້າຊີດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Injection Pump)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // ໝາຍເຫດ
          [
            { text: 'X', fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 1.2 } }, // O = -15, X = -17
            {
              margin: [0, 5, 4.5, 0],
              alignment: 'right',
              canvas: [
                {
                  type: 'polyline',
                  lineWidth: 1,
                  closePath: true,
                  alignment: 'right',
                  points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                }
              ]
            }
          ]
        ],
        columnGap: 2.5,
        relativePosition: { x: 0, y: 0 }
      },
      {
        // row 6
        margin: [0, 17.5],
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: '6. ການກະຈາຍຂອງອາຍເສັຍ, ຄັວນດຳ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: '(Emission Limit)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 95,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'Carbon Monoxide', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(CO)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 3
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'Hydrocabons', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(HC)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // ໝາຍເຫດ
          [
            { text: 'X', fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 1.2 } }, // O = -15, X = -17
            {
              margin: [0, 5, 4.5, 0],
              alignment: 'right',
              canvas: [
                {
                  type: 'polyline',
                  lineWidth: 1,
                  closePath: true,
                  alignment: 'right',
                  points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                }
              ]
            }
          ]
        ],
        columnGap: 2.5,
        relativePosition: { x: 0, y: 0 }
      },
      {
        // row 7
        margin: [0, 5],
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: '7. ລະບົບກົນໄກປ່ຽນຄວາມແຮງ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: '(Power Transmission)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 95,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ຈານຄາດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Clutch)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 3
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ເກັຍ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Gear Lever)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 4
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ກາກດັ່ງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Drive Shaft)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 5
          {
            width: 68,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ກາກບາດ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Universal Join)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // ໝາຍເຫດ
          [
            { text: 'X', fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 1.2 } }, // O = -15, X = -17
            {
              margin: [0, 5, 4.5, 0],
              alignment: 'right',
              canvas: [
                {
                  type: 'polyline',
                  lineWidth: 1,
                  closePath: true,
                  alignment: 'right',
                  points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                }
              ]
            }
          ]
        ],
        columnGap: 2.5,
        relativePosition: { x: 0, y: 0 }
      },
      {
        // row 8
        margin: [0, 17.5],
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: '8. ລະບົບເກັບສຽງ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: '(Exhausting Device)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 95,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ທໍ່ອາຍເສັຍ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Muffler)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 3
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ລະດັບສຽງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(db)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // ໝາຍເຫດ
          [
            { text: 'X', fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 1.2 } }, // O = -15, X = -17
            {
              margin: [0, 5, 4.5, 0],
              alignment: 'right',
              canvas: [
                {
                  type: 'polyline',
                  lineWidth: 1,
                  closePath: true,
                  alignment: 'right',
                  points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                }
              ]
            }
          ]
        ],
        columnGap: 2.5,
        relativePosition: { x: 0, y: 0 }
      },
      {
        // row 9
        margin: [0, 5],
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: '9. ລະບົບໄຟ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: '(Electronic Device)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 95,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ໝໍ້ໄຟ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Batterry)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 3
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ໄຟຕາ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Light)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 4
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ແກ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Horn)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 5
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ໄຟລ້ຽວ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Indictor Light)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // ໝາຍເຫດ
          [
            { text: 'X', fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 1.2 } }, // O = -15, X = -17
            {
              margin: [0, 5, 4.5, 0],
              alignment: 'right',
              canvas: [
                {
                  type: 'polyline',
                  lineWidth: 1,
                  closePath: true,
                  alignment: 'right',
                  points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                }
              ]
            }
          ]
        ],
        columnGap: 2.5,
        relativePosition: { x: 0, y: 0 }
      },
      {
        // row 9 -- continue
        margin: [0, 17.5],
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: '', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: '', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 95,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ໄຟແບກ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Brake Light)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 3
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ໄຟຕາລີ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Side light)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 4
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ໝໍ້ໄຟ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Batterry)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          }
        ],
        columnGap: 2.5,
        relativePosition: { x: 0, y: 0 }
      },
      {
        // row 10
        margin: [0, 5],
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: '10. ລະບົບກວດກາຄວາມຟອດໄພ:', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 0, y: 0 } },
              { text: '(Safety)', fontSize: 8, margin: [0, 10] }
            ]
          },
          // column 2
          {
            width: 95,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ແວ່ນສ່ອງຫລັງ,ຂ້າງ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Mirror)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // column 3
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ຝອຍປັດນໍ້າຝົນ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Wiper)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
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
          // ໝາຍເຫດ
          [
            { text: 'X', fontSize: 10, alignment: 'right', relativePosition: { x: -17, y: 1.2 } }, // O = -15, X = -17
            {
              margin: [0, 5, 4.5, 0],
              alignment: 'right',
              canvas: [
                {
                  type: 'polyline',
                  lineWidth: 1,
                  closePath: true,
                  alignment: 'right',
                  points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }]
                }
              ]
            }
          ]
        ],
        columnGap: 2.5,
        relativePosition: { x: 0, y: 0 }
      },
      {
        // row 11 ໝາຍເຫດ
        margin: [0, 25],
        columns: [
          // column 1
          {
            width: 125,
            stack: [
              { text: 'ໝາຍເຫດ', fontSize: 12 }
            ]
          },
          // column 2
          {
            width: 95,
            columns: [
              [
                { text: 'O', fontSize: 10, color: 'green', relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ເຄື່ອງໝາຍຜ່ານ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Pass)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                  ]
                },
                {
                  margin: [0, 5],
                  canvas: [
                    {
                      type: 'polyline',
                      lineWidth: 1,
                      closePath: true,
                      points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }],
                      lineColor: 'green'
                    }
                  ]
                }
              ]
            ],
            columnGap: -5
          },
          // column 3
          {
            width: 78,
            columns: [
              [
                { text: 'X', fontSize: 10, color: 'red', relativePosition: { x: 6.5, y: 1.2 } },
                {
                  stack: [
                    { text: 'ບໍ່ຜ່ານ', fontSize: 9, lineHeight: 0.6, relativePosition: { x: 25, y: 0 } },
                    { text: '(Failed)', fontSize: 8, relativePosition: { x: 25, y: 10 } }
                  ]
                },
                {
                  margin: [0, 5],
                  canvas: [
                    {
                      type: 'polyline',
                      lineWidth: 1,
                      closePath: true,
                      points: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 10 }],
                      lineColor: 'red'
                    }
                  ]
                }
              ]
            ],
            columnGap: -5
          }
        ],
        columnGap: 2.5
      }
    ]
  }
}
