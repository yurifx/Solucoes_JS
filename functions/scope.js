const name = "AAA"

const fn = () => {
    var name = "yuri"
    console.log(name)
}

fn(); //yuri


const fn2 = () => {
    console.log(name)
}
fn2(); //AAA