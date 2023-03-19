let allError = [...document.getElementsByClassName('errorReq')]
allError.map((item) => {
    item.style.cssText = 'transform:scale(0)'
})

let inp = document.getElementsByTagName('input')

for (i = 0; i < inp.length; i++) {
    let = creditcard = document.getElementById('creditcard')
    let = Holder = document.getElementById('Holder')
    let = cvc = document.getElementById('cvc')

    inp[i].addEventListener('input', function () {

        if (this.getAttribute('id') == creditcard.getAttribute('id')) {
            this.nextElementSibling.style.cssText = 'transform:scale(0)'
            if (this.value.search(/[a-z-*-+-,-.]/i) != -1) {
                this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
            }
        }
        if (this.getAttribute('id') == Holder.getAttribute('id')) {
            this.nextElementSibling.style.cssText = 'transform:scale(0)'
            if (this.value.search(/[0-9-*-+-,-.]/i) != -1) {
                this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
            }
        }
        if (this.getAttribute('id') == cvc.getAttribute('id')) {
            this.nextElementSibling.style.cssText = 'transform:scale(0)'
            if (this.value.search(/[a-z-*-+-,-.]/i) != -1) {
                this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
            }
        }
    })
}

let _show = document.getElementById('show')
document.getElementById('creditcard').addEventListener('input', function (event) {

    let status = event.data
    let credit = this.value

    if (status == null) {
        let temp = _show.innerHTML
        if (
            temp.length == 5 ||
            temp.length == 10 ||
            temp.length == 15
        ) {
            _show.innerHTML = temp.substring(0, (temp.length) - 2)
        } else {

            _show.innerHTML = temp.substring(0, (temp.length) - 1)
        }
    } else {
        if (
            credit.length < 16
        ) {
            _write(credit)
        } else if (
            credit.length == 16
        ) {
            _write(credit)
            document.getElementById('Holder').focus()
        } else {
            this.value = (this.value).substring(0, 16)
        }
    }
})

function _write(credit) {

    let creditLast = credit.substr(-1)
    if (credit.length == 4 ||
        credit.length == 8 ||
        credit.length == 12
    ) {
        _show.innerHTML += creditLast + " "

    } else {
        _show.innerHTML += creditLast
    }
}

let _see = document.getElementById('see')
document.getElementById('Holder').addEventListener('input', function (event) {
    let hod = event.data
    let hold = this.value

    if (hod == null) {
        let temp = _see.innerHTML
        if (
            temp.length == 5 ||
            temp.length == 10
        ) {
            _see.innerHTML = temp.substring(0, (temp.length) - 2)
        } else {
            _see.innerHTML = temp.substring(0, (temp.length) - 1)
        }
    } else {
        if (
            hold.length < 13
        ) {
            _wri(hold)
        } else if (
            hold.length == 13
        ) {
            _wri(hold)
            document.getElementById('cvc').focus()
        } else {
            this.value = (this.value).substring(0, 13)
        }
    }
})

function _wri(hold) {

    let holdLast = hold.substr(-1)
    if (hold.length == 14
    ) {
        _see.innerHTML += holdLast + " "
    } else {
        _see.innerHTML += holdLast
    }
}


let cv = document.getElementById('cv')
document.getElementById('cvc').addEventListener('input', function (event) {
    let cvv = event.data
    let cvv2 = this.value

    if (cvv == null) {
        let temp = cv.innerHTML
        if (
            temp.length == 4 ||
            temp.length == 8
        ) {
            cv.innerHTML = temp.substring(0, (temp.length) - 2)
        } else {

            cv.innerHTML = temp.substring(0, (temp.length) - 1)
        }
    } else {
        if (
            cvv2.length < 4
        ) {
            _wr(cvv2)
        } else if (
            cvv2.length == 4
        ) {
            _wr(cvv2)
            document.getElementById('years').focus()
        } else {
            this.value = (this.value).substring(0, 4)
        }
    }
})

function _wr(cvv2) {

    let cvLast = cvv2.substr(-1)
    if (cvv2.length == 5
    ) {
        cv.innerHTML += cvLast + " "
    } else {
        cv.innerHTML += cvLast
    }
}

document.querySelector('.yearss').addEventListener('input', () =>{
    document.querySelector('._year').innerText = document.querySelector('.yearss').value
})

document.querySelector('.monnn').addEventListener('input', () =>{
    document.querySelector('._month').innerText = document.querySelector('.monnn').value
})