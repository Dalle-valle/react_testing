
export function checkInfo(callback) {
    fetch("https://foobar-exam-2020.herokuapp.com/")
      .then((e)=> e.json())
      .then((data)=> callback(data));
}

export function checkBeers(callback) {
    fetch("https://foobar-exam-2020.herokuapp.com/beertypes")
      .then((e)=> e.json())
      .then((data)=> callback(data));
}