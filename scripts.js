/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"aTmaEg94xoBkfhV1","label":"socials","bookmarks":[{"id":"HK9yObOiJrNLCrJ9","label":"vk/mypage","url":"https://vk.com/"},{"id":"abZYJAKlz9wgPx4K","label":"vk/jennaOrtega","url":"https://vk.com/jen.ortega"},{"id":"jmpGJiM6tF0qEs1C","label":"pinterest","url":"https://ru.pinterest.com/"}]},{"id":"xbvKHZMVisThuZ13","label":"exams","bookmarks":[{"id":"5n4BdBqGG4qTXkJo","label":"math","url":"https://math-ege.sdamgia.ru/"},{"id":"T5HezgGH0LvOL4kf","label":"rus lang","url":"https://rus-ege.sdamgia.ru/"},{"id":"ztLadH9GidZPb5KL","label":"computer science","url":"https://inf-ege.sdamgia.ru/"}]},{"id":"94QgEkyak7qwU7XC","label":"worth reading","bookmarks":[{"id":"esf7Z5E8Ur7neCO3","label":"god","url":"https://open.spotify.com/playlist/0AJM4K3i74dELKYiTWZPBj"},{"id":"pIjB04KeGP0iBUga","label":"dark playlist","url":"https://open.spotify.com/playlist/3N7SkcTv02YpsqcFOXJCzF"},{"id":"tdEOOM60fmEHwBJc","label":"god chill","url":"https://open.spotify.com/playlist/2UncXoIwHQJ7RT56anrdlyl"}]},{"id":"hiqFY1OKoku3D88V","label":"other","bookmarks":[{"id":"h6FoMGdoQ6PYv9C8","label":"git","url":"https://github.com/hoptdev"},{"id":"K73Ade0ozpVidAkW","label":"youtube","url":"https://www.youtube.com/"},{"id":"xfAvY5xtak3L6I0d","label":"school journal","url":"http://94.190.51.157/"},{"id":"dE1xI7qBask2RTDN","label":"translator","url":"https://www.deepl.com/translator"}]},{"id":"UMC7ch9j4C5bDNvq","label":"work","bookmarks":[{"id":"4UJJ5yHF531Oxd6m","label":"repos/market","url":"https://github.com/vvtops/garant_hopt"},{"id":"njfYz63ScR4ha4cY","label":"office","url":"https://www.office.com/launch/excel"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
