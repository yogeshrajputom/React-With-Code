function customRender(reactElement,container){
    const domElement = document.createElement(createElement.type)
    domElement.innerHTML =reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
}



const reactElement = {
    type: 'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    Children:'click me to visite google'
}

const mainContaner = document.querySelector("#root");

customRender(reactElement,mainContaner);