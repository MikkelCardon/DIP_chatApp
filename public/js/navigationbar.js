
const navigationButtonsList = document.querySelectorAll("#navigationButtonsList > li")

navigationButtonsList.forEach(async listElement => {
    const navigationButton = listElement.firstElementChild

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
    window.location.href = url
}
