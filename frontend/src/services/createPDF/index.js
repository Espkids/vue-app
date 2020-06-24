import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

import getTitle from './titleContent'
import getCar from './carContent'
import getInspection from './inspectionContent'

pdfMake.vfs = pdfFonts.pdfMake.vfs

pdfMake.fonts = {
  THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew Bold.ttf',
    italics: 'THSarabunNew Italic.ttf',
    bolditalics: 'THSarabunNew BoldItalic.ttf'
  },
  LaoPhimPha: {
    normal: 'Lao_PhimPha_Regular.ttf',
    bold: 'Lao_PhimPha_Bold.ttf',
    italics: 'Lao_PhimPha_Regular.ttf',
    bolditalics: 'Lao_PhimPha_Regular.ttf'
  },
  LaoPhetsarath: {
    normal: 'Phetsarath OT.ttf',
    bold: 'Phetsarath OT.ttf',
    italics: 'Phetsarath OT.ttf',
    bolditalics: 'Phetsarath OT.ttf'
  },
  LaoThatPhon: {
    normal: 'That-Phon.ttf',
    bold: 'That-Phon.ttf',
    italics: 'That-Phon.ttf',
    bolditalics: 'That-Phon.ttf'
  },
  LaoDokkham: {
    normal: 'Lao_Dokkham.ttf',
    bold: 'Lao_Dokkham.ttf',
    italics: 'Lao_Dokkham.ttf',
    bolditalics: 'Lao_Dokkham.ttf'
  },
  LaoRajbandith: {
    normal: 'Lao_Rajbandith.ttf',
    bold: 'Lao_Rajbandith.ttf',
    italics: 'Lao_Rajbandith.ttf',
    bolditalics: 'Lao_Rajbandith.ttf'
  }
}

export default {
  createPDF () {
    const docDefinition = {
      pageMargins: [30, 40, 30, 30], // margin: [Left, Top, Right, bottom]
      pageSize: 'A4',
      content: [
        getTitle.titleContent(),
        getCar.carContent(),
        getInspection.inspectionContent()
      ],
      defaultStyle: {
        font: 'LaoRajbandith'
      }
    }
    const pdfDocGenerator = pdfMake.createPdf(docDefinition)
    pdfDocGenerator.open()
    // pdfDocGenerator.download('testPDF.pdf')
    pdfDocGenerator.getBlob((blob) => {
      console.log(blob)
    })
  }
}
