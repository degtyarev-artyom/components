export const calc = ({
  первоначальныйВзносПроцентМин,
  стоимостьЖилья,
  первоначальныйВзнос,
  срокИпотекиЛет,
  процентнаяСтавкаГодовых,
  квМ,
}, data, setData, dataLS) => {

  первоначальныйВзносПроцентМин = первоначальныйВзносПроцентМин ?? data.первоначальныйВзносПроцентМин
  стоимостьЖилья = стоимостьЖилья ?? data.стоимостьЖилья
  const первоначальныйВзносМин = стоимостьЖилья * первоначальныйВзносПроцентМин / 100
  первоначальныйВзнос = первоначальныйВзнос ?? data.первоначальныйВзнос
  первоначальныйВзнос = первоначальныйВзнос > data.первоначальныйВзнос
    ? Math.ceil(первоначальныйВзнос / 100000) * 100000
    : первоначальныйВзнос
  первоначальныйВзнос = первоначальныйВзнос < data.первоначальныйВзнос
    ? Math.floor(первоначальныйВзнос / 100000) * 100000
    : первоначальныйВзнос
  первоначальныйВзнос = первоначальныйВзнос < первоначальныйВзносМин ? первоначальныйВзносМин : первоначальныйВзнос
  срокИпотекиЛет = срокИпотекиЛет ?? data.срокИпотекиЛет
  процентнаяСтавкаГодовых = процентнаяСтавкаГодовых ?? data.процентнаяСтавкаГодовых
  квМ = квМ ?? data.квМ

  const суммаКредита = стоимостьЖилья - первоначальныйВзнос
  const срокИпотекиМесяцев = срокИпотекиЛет * 12
  const ежемесячнаяСтавка = процентнаяСтавкаГодовых / 12 / 100
  const общаяСтавка = Math.pow((1 + ежемесячнаяСтавка), срокИпотекиМесяцев)
  const ежемесячныйПлатеж = суммаКредита * ежемесячнаяСтавка * общаяСтавка / (общаяСтавка - 1)
  const переплата = ежемесячныйПлатеж * срокИпотекиМесяцев - суммаКредита

  const calcData = {
    первоначальныйВзносПроцентМин,
    стоимостьЖилья,
    первоначальныйВзнос,
    суммаКредита,
    срокИпотекиЛет,
    срокИпотекиМесяцев,
    процентнаяСтавкаГодовых,
    квМ,
    ежемесячнаяСтавка,
    общаяСтавка,
    ежемесячныйПлатеж,
    переплата
  }

  localStorage.setItem(dataLS, JSON.stringify(calcData))
  setData(calcData)
}

export const ipkPrettyNumber = (n, noFixed = false) => {
  n = n?.toFixed(2) ?? '0.00'
  let [num, part] = n.toString().split('.')
  num = num.split('').reverse().join('').match(/.{1,3}/g).join(' ').split('').reverse().join('')
  const result = noFixed ? `${num}` : `${num}.${part}`
  return result === '-0.00' ? '0.00' : result
}

export const ipkGetData = (data, plus = 0) => {

  const ежемесячнаяСтавка = data.ежемесячнаяСтавка
  const ежемесячныйПлатеж = data.ежемесячныйПлатеж
  const остаточнаяЧасть = data.суммаКредита
  const процентнаяЧасть = ежемесячнаяСтавка * остаточнаяЧасть
  const основнаяЧасть = ежемесячныйПлатеж - процентнаяЧасть + plus
  const процентнаяЧастьПроценты = процентнаяЧасть * 100 / ( ежемесячныйПлатеж + plus )
  const основнаяЧастьПроценты = основнаяЧасть * 100 / ( ежемесячныйПлатеж + plus )
  const выплаченоПроцентнаяЧасть = 0
  const выплаченоОсновнаяЧасть = 0
  const следующаяПроцентнаяЧасть = процентнаяЧасть
  const следующаяОсновнаяЧасть = основнаяЧасть

  let p = {
    ежемесячнаяСтавка,
    ежемесячныйПлатеж,
    остаточнаяЧасть,
    процентнаяЧасть,
    основнаяЧасть,
    процентнаяЧастьПроценты,
    основнаяЧастьПроценты,
    выплаченоПроцентнаяЧасть,
    выплаченоОсновнаяЧасть,
    следующаяПроцентнаяЧасть,
    следующаяОсновнаяЧасть
  }

  const платежи = [p]

  for (let i = 1; p.остаточнаяЧасть >= 0; i++) {

    const остаточнаяЧасть = p.остаточнаяЧасть - p.основнаяЧасть
    const процентнаяЧасть = p.ежемесячнаяСтавка * остаточнаяЧасть
    const основнаяЧасть = p.ежемесячныйПлатеж - процентнаяЧасть + plus
    const процентнаяЧастьПроценты = процентнаяЧасть * 100 / ( p.ежемесячныйПлатеж + plus )
    const основнаяЧастьПроценты = основнаяЧасть * 100 / ( p.ежемесячныйПлатеж + plus )
    const выплаченоПроцентнаяЧасть = p.следующаяПроцентнаяЧасть
    const выплаченоОсновнаяЧасть = p.следующаяОсновнаяЧасть

    const следующаяПроцентнаяЧасть = p.следующаяПроцентнаяЧасть + процентнаяЧасть
    const следующаяОсновнаяЧасть = p.следующаяОсновнаяЧасть + основнаяЧасть

    if (Math.round(+p.следующаяОсновнаяЧасть) > Math.round(+data.суммаКредита)) {
      break
    }

    p = {
      ...p,
      остаточнаяЧасть,
      процентнаяЧасть,
      основнаяЧасть,
      процентнаяЧастьПроценты,
      основнаяЧастьПроценты,
      выплаченоПроцентнаяЧасть,
      выплаченоОсновнаяЧасть,
      следующаяПроцентнаяЧасть,
      следующаяОсновнаяЧасть
    }

    платежи.push(p)
  }

  return платежи.map((obj, i) => {
    for (let key in obj) {
      obj[key] = key === 'ежемесячнаяСтавка'
        ? obj[key]
        : Math.round(obj[key] * 100) / 100
    }
    obj['i'] = i + 1
    return obj
  })
}
