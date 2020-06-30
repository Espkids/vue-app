import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from './fonts/vfs_fonts'

import getTitle from './inspectionContents/titleContent'
import getCar from './inspectionContents/carContent'
import getInspection from './inspectionContents/inspectionContent'
import getFooter from './inspectionContents/footerContent'

// Import test json data
import data from './mocData.json'
const func = require('./functions/function')

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
  async createPDF () {
    const docDefinition = {
      pageMargins: [30, 20, 30, 20], // margin: [Left, Top, Right, bottom]
      pageSize: 'A4',
      content: [
        await getTitle.titleContent(),
        await getCar.carContent(data),
        await getInspection.inspectionContent(),
        await getFooter.footerContent()
      ],
      defaultStyle: {
        font: 'LaoRajbandith'
      }
    }
    const pdfDocGenerator = await pdfMake.createPdf(docDefinition)
    // pdfDocGenerator.download('pdfReport.pdf')
    // pdfDocGenerator.open()
    // pdfDocGenerator.print({}, window)

    // Get PDF as blob for upload to server files store
    const promise = new Promise((resolve, reject) => {
      pdfDocGenerator.getBlob(async (blob) => {
        const result = await func.uploadToSpaces(blob)
        if (result.response) {
          reject(result)
        } else {
          resolve(result)
        }
      })
    })
    // console.log('waiting for callback function')
    // const result = promise // Do something when callback done
    //   .then(res => {
    //     console.log('finished waiting')
    //     return res
    //   })
    return promise
  }
}
