// variables 
let  main_menu                   = document.querySelector('#main_menu')
let  show                        = document.querySelector('.show')
let  error                       = document.querySelector('.error')
let  counter                     = document.querySelector('.counter')
let  player_one                  = document.querySelector('.player_one')
let  player_one_input            = document.querySelector('.player_one_input')
let  player_one_button           = document.querySelector('.player_one_button')
let  player_two                  = document.querySelector('.player_two')
let  player_two_input            = document.querySelector('.player_two_input')
let  player_two_button           = document.querySelector('.player_two_button')
let  player_three                = document.querySelector('.player_three')
let  player_three_input          = document.querySelector('.player_three_input')
let  player_three_button         = document.querySelector('.player_three_button')
let  number_of_time              = document.querySelector('.number_of_time')
let  player_three_player_counter = document.querySelector('.player_three_player_counter')
let  i                           = 0
let  x                           = 0


//  player one
player_one_button.addEventListener('click' , ()=>{
  if(player_one_input.value == ''){
    error.innerHTML = "please enter a value"

  }else {
    if(player_one_input.value > 10){
    error.innerHTML = "The number is too big"

    }else{
      error.innerHTML   = ''
      show.innerHTML    = "Player Two"
      player_one.style  = "display:none;"
      player_two.style  =" display:block"
    }
  }
})

// player two
player_two_button.addEventListener('click', ()=>{
  if(player_two_input.value == ''){
    error.innerHTML = "please enter a value"

  }else {
    if(player_two_input.value > 10){
      error.innerHTML        = " the number is too big"
      player_two_input.value = ''

    }else {
      if(player_two_input.value == player_one_input.value){
        main_menu.style     = "font-size:54px; text_align:center;"
        main_menu.innerHTML = "Player Two Win    🏆🏆🏆🏆"
        
      }else {
        increaseCounter()
        function increaseCounter(){
          if(i < 2){
            i++;
            counter.innerText       = "Attempts: " + i;
            player_two_input.value  = ''
            error.innerHTML         = ''

          }else {
            if(player_two_input.value = player_one_input.value) {
              show.innerHTML         = 'Player Three'
              main_menu.style        = "font-size:64px; text_align:center;"
              player_two.style       = "display:none;"
              player_three.style     = "display:block"

            }else {
              main_menu.innerHTML = " Player One Win"
            }
          }
        }
      }
    }
  }
})

// player three
player_three_button.addEventListener('click', ()=>{
  if(player_three_input.value == ''){
    error.innerHTML = "please enter a value"

  }else {
    if(player_three_input.value > 10){
      error.innerHTML           = " the number is too big"
      player_three_input.value = ''
     

    }else {
      if(player_three_input.value == player_one_input.value){
        main_menu.style     = "font-size:54px; text_align:center;"
        main_menu.innerHTML = "Player Three Win    🏆🏆🏆🏆"
       
        
      }else {
        increaseCounter()
        function increaseCounter(){
          if(x < 2){
            x++;
            player_three_input.value  = ''
            player_three_player_counter.innerHTML = "Attempts: " + x;
            error.innerHTML     = ''
            

          }else {
            main_menu.style      = "font-size:64px; text_align:center;"
            main_menu.innerHTML  = " Player One Win    🏆🏆🏆🏆"
          }
        }
      }
    }
  }
})