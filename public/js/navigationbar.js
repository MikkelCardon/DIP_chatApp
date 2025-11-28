
const navigationButtonsList = document.querySelectorAll("#navigationButtonsList > li")

navigationButtonsList.forEach(async listElement => {
    console.log(`Listelement: ${listElement}`)

    const navigationButton = listElement.firstElementChild
    console.log(`navigationButton: ${navigationButton}`)
    console.log(`navigationButton Id: ${navigationButton.id}`)

    switch (navigationButton.id) {
        case "homeNavigationButton":
            navigationButton.addEventListener('click', () => nagivateToPage('/'))
            break
        case "accountNavigatioButton":
            navigationButton.addEventListener('click', () => nagivateToPage('/accounts'))
            break
        case "logoutNavigationButton":
            navigationButton.addEventListener('click', () => nagivateToPage('/logout'))
        default:
            break
    }
})

function nagivateToPage(url) {
    console.log('button clicked')
    window.location.href = url
}
