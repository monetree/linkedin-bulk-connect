  document.getElementsByClassName
  ("full-width artdeco-button artdeco-button--2 artdeco-button--full artdeco-button--secondary ember-view")
  [0].childNodes[2].click()

  listofbuttons = []

  for(let b of buttons){
    listofbuttons.push(b.childNodes[2])
  }

  for(let l of listofbuttons){
    l.click()
  }
