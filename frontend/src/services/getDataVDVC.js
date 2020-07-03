import axios from 'axios'

async function initial (startValue, endValue) {
  for (var i = startValue; i <= endValue; i++) {
    let value
    if (i < 10) {
      value = '000000' + i
    } else if (i >= 10 && i < 100) {
      value = '00000' + i
    } else if (i >= 100 && i < 1000) {
      value = '0000' + i
    } else if (i >= 1000 && i < 10000) {
      value = '000' + i
    } else if (i >= 10000 && i < 100000) {
      value = '00' + i
    } else if (i >= 100000 && i < 1000000) {
      value = '0' + i
    } else {
      value = value + ''
    }
    const result = await axios.get(`http://www.vdvclao.org/thongpong/c/action/simdatacdg2?pass=ati123&type=vehiclereg&division_no=${value}`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
        return false
      })
    if (result !== false) {
      if (result !== '') {
        await splitToArray(result)
      } else {
        console.log(`${value} => Result is null`)
        continue
      }
    } else {
      console.log(`Error to get data at division_no = ${value}. Please try again at this number`)
      break
    }
  }
}

async function splitToArray (value) {
  const arr = value.split('\r\n')
  const newArr = []
  arr.splice(-1, 1)
  const count = arr.length / 74
  if (count > 1) {
    for (var i = 0; i < count; i++) {
      const result = []
      for (var j = 0; j < 74; j++) {
        result.push(arr.pop())
      }
      newArr.push(result)
    }
    assignToObject(newArr)
  } else {
    newArr.push(arr)
    assignToObject(newArr)
  }
}

async function assignToObject (value) {
  for (var i = 0; i < value.length; i++) {
    const objData = {}
    await value[i].forEach(element => {
      var fieldname = element.substring(0, element.indexOf(':'))
      fieldname = fieldname === 'print-template-file' ? 'print_template_file' : fieldname
      var value = element.substring(element.indexOf(':') + 1)
      value = value === '' ? null : value + ''
      const obj = {
        [fieldname]: value
      }
      Object.assign(objData, obj)
    })
    await saveData(objData)
  }
}

async function saveData (value) {
  await axios.post('http://localhost:8000/api/car', value)
    .then(res => {
      console.log(res.data.msg)
    })
    .catch(err => {
      console.log(err)
    })
}

export default {
  getData (startValue, endValue) {
    initial(startValue, endValue)
  }
}
