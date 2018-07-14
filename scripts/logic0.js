const print = function (text) {
    let el = document.getElementsByClassName('logic')[0]
    el.append(document.createTextNode(text))
    el.append(document.createElement('br'))
    console.log(text)
  }

  const data = {
    'dyadic': [[0, 0], [1, 0], [1, 1], [0, 1]],
    'binary': [[0], [1]],
  
    'xor': {
      'training': [[0], [1], [0], [1]],
      'testing': [[0, 0], [1, 0], [1, 1], [0, 1]],
      'expected': [[0], [1], [0], [1]]
    },
    'or': {
      'training': [[0], [1], [1], [1]],
      'testing': [[0, 0], [1, 0], [1, 1], [0, 1]],
      'expected': [[0], [1], [1], [1]]
    },
    'and': {
      'training': [[0], [0], [1], [0]],
      'testing': [[0, 0], [1, 0], [1, 1], [0, 1]],
      'expected': [[0], [0], [1], [0]]
    },
    'implies': {
      'training': [[1], [0], [1], [1]],
      'testing': [[0, 0], [1, 0], [1, 1], [0, 1]],
      'expected': [[1], [0], [1], [1]]
    },
    'negation': {
      'training': [[1], [0]],
      'testing': [[1], [1]],
      'expected': [[0], [0]]
    }
  }