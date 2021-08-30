// Definir variables
const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pausa = document.querySelector('#pausa')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pausa.addEventListener('click', handlePausa)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pausa.hidden = false
    console.log('le diste clic al boton play')
}
function handlePausa(){
    $video.pause()
    $pausa.hidden = true
    $play.hidden = false
    console.log('le diste clic al boton pausa')
}

$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handleBackward(){
    // $video.currentTime = $video.currentTime - 10
    $video.currentTime -= 10 //versión resumida
    console.log('retrocede 10 segundos', $video.currentTime)
}
function handleForward(){
    // $video.currentTime = $video.currentTime + 10
    $video.currentTime += 10 //versión resumida
    console.log('avanzar 10 segundos', $video.currentTime)
}

const $progress = document.querySelector('#progress')

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
    $progress.max = $video.duration
    console.log('cargo mi video', $video.duration)
}
function handleTimeUpdate(){
    $progress.value = $video.currentTime
    // console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)
function handleInput(){
    // $video.duration = $progress.value
    $video.currentTime = $progress.value
    console.log($progress.value)
}
