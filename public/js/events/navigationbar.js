
const navigationButtonsList = document.querySelectorAll("#navigationbar > .navigationButton")

navigationButtonsList.forEach(async navigationButton => {
    switch (navigationButton.id) {
        case "homeNavigationButton":
            navigationButton.addEventListener('click', () => navigateToPage('/'))
            break
        case "accountNavigatioButton":
            navigationButton.addEventListener('click', () => navigateToPage('/accounts'))
            break
        case "logoutNavigationButton":
            navigationButton.addEventListener('click', () => navigateToPage('/logout'))
        default:
            break
    }
})

function navigateToPage(url) {
    window.location.href = url
}
