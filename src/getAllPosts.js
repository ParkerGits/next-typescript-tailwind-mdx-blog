function importAll(r) {
  return r.keys().map((fileName) => {
    let slugString = fileName.substring(1, fileName.length - 4)
    let titleString = titleCase(
      fileName
        .substring(fileName.lastIndexOf('/') + 1, fileName.length - 4)
        .replace(/-/g, ' ')
        .toLowerCase(),
    )
    let topicString = slugString.substring(1)
    topicString = topicString.substring(0, topicString.indexOf('/'))
    return {
      slug: slugString,
      title: titleString,
      topic: topicString,
    }
  })
}

export const posts = importAll(require.context('./pages/blog/', true, /\.mdx$/))

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ')
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }
  return splitStr.join(' ')
}
