// import _ from 'lodash'
import id3 from 'id3js'

class Song {
  constructor (dir, song) {
    const self = this
    this.dir = dir
    this.song = song
    this.fullpath = `${this.dir}/${this.song}`
    this.tags = {}
    this.getTags().then(tags => {
      self.tags = tags.v2
      return self
    })
    return self
  }

  getTags () {
    return new Promise((resolve, reject) => {
      const fileObj = {
        file: this.fullpath,
        type: id3.OPEN_LOCAL
      }
      id3(fileObj, (err, tags) => {
        if (err) {
          reject(err)
          return err
        }
        resolve(tags)
      })
    })
  }

  addToDB () {
    // Add song to the database
  }
}

export default Song
