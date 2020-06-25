import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import axios from 'axios'
import getTitle from './titleContent'
import getCar from './carContent'
import getInspection from './inspectionContent'
import getFooter from './footerContent'

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

// Upload to Spaces in DigitalOcean
async function uploadToSpaces (blob) {
  // Add file as blob
  const pdfFile = new File([blob], await getFilename(), { type: 'pdf' })
  // Create new formData
  const formData = new FormData()
  // Add pdf data to array of formData
  formData.append('file', pdfFile)
  axios.post('/upload', formData, {
    baseURL: 'http://localhost:5000'
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

async function getFilename () {
  const time = new Date()
  const currentTime = await time.toLocaleString()
  const arrTime = await currentTime.split(' ')
  const date = await arrTime[0].split('/')
  return `InspectionReport-${date[0]}-${date[1]}-${date[2]}_${arrTime[1]}.pdf`
}

export default {
  async createPDF () {
    const docDefinition = {
      pageMargins: [30, 20, 30, 20], // margin: [Left, Top, Right, bottom]
      pageSize: 'A4',
      content: [
        await getTitle.titleContent(),
        await getCar.carContent(),
        await getInspection.inspectionContent(),
        await getFooter.footerContent()
      ],
      defaultStyle: {
        font: 'LaoRajbandith'
      }
    }
    const pdfDocGenerator = await pdfMake.createPdf(docDefinition)
    // pdfDocGenerator.download('pdfReport.pdf')
    // pdfDocGenerator.download('testPDF.pdf')
    // Get PDF as blob for upload to server files store
    console.log(pdfDocGenerator)
    await pdfDocGenerator.getBlob(blob => {
      // console.log(blob)
      uploadToSpaces(blob)
    })
  }
}
