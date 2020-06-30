import axios from 'axios'
// function get current time to show in PDF
function getTime () {
  const date = new Date()
  const timeString = date.toLocaleString()
  const timeArr = timeString.split(' ')
  const day = '0' + timeArr[0].split('/')[0]
  const month = '0' + timeArr[0].split('/')[1]
  const year = timeArr[0].split('/')[2]
  const time = timeArr[1].substr(0, 5)
  return `${day.substr(-2)}/${month.substr(-2)}/${year} ${time}`
}
// function return value of Inspection
// if pass return O, not pass return X in uppercase
function getValue (value) {
  return value ? 'O' : 'X'
}

// Upload to Spaces in DigitalOcean
async function uploadToSpaces (blob) {
  // Add file as blob
  const pdfFile = new File([blob], await getFilename(), { type: 'application/pdf' })
  // Create new formData
  const formData = new FormData()
  // Add pdf data to array of formData
  formData.append('file', pdfFile)
  const result = await axios.post('/uploadPDF/', formData, { baseURL: 'http://localhost:8000/api' })
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err
    })
  return result
}

async function getFilename () {
  const time = await new Date()
  const currentTime = await time.toLocaleString()
  const arrTime = await currentTime.split(' ')
  const date = await arrTime[0].split('/')
  return `InspectionReport-${date[0]}-${date[1]}-${date[2]}_${arrTime[1]}.pdf`
}

// module.exports = {
//   getTime,
//   getValue,
//   uploadToSpaces
// }

export {
  getTime,
  getValue,
  uploadToSpaces
}
