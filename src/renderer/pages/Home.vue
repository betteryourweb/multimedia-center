<template>
    <div class="Home page">
        <div class="ControlBar">
            <div class="info">
                <div class="display"></div>
            </div>
            <div class="controls">
                <div class="btn back"><i class="fa fa-backward"></i></div>
                <div class="btn stop"><i class="fa fa-stop"></i></div>
                <div class="btn play"><i class="fa fa-play"></i></div>
                <div class="btn pause"><i class="fa fa-pause"></i></div>
                <div class="btn forward"><i class="fa fa-forward"></i></div>
                <div class="progress-bar">
                    <div class="timeElapsed">0:00</div>
                    <div class="progress"></div>
                    <div class="timeRemaining">3:50</div>
                </div>
            </div>
        </div>
        <div class="separator"></div>
        <div class="dirContents">
            <div class="item" v-for="item in music">
                <a href="">{{item}}</a>
            </div>
        </div>
    </div>
</template>
<script>
  import fs from 'fs'
  import _ from 'lodash'
  import Song from '@/lib/Song'
  export default {
    data () {
      return {
        music: []
      }
    },
    methods: {
      getMusic () {
        const dir = '/home/administrator/Music'
        const music = fs.readdirSync(dir)
        let musicArr = []
        _.each(music, song => {
          let tmpSong = new Song(dir, song)
          musicArr.push(tmpSong)
        })

        return musicArr
      },
      getId3Tag (file) {
      }
    },
    mounted () {
      console.log('App Started')
      this.music = this.getMusic()
      console.log(this.music)
    }
  }
</script>
<style lang="scss">
    .separator {
        width: 90%;
        flex-basis: 90%;
        padding: 1px;
        background: #333;
        align-self: center;
        margin: 5px auto;
    }

    .Home {
        height: 100vh;
        box-sizing: border-box;

        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        .ControlBar {
            flex-basis: 100%;
            padding: 0 10px;
            .info {
                padding: 10px;
                .display {
                    background: #333;
                    width: 100%;
                    padding: 2px;
                }
                flex-basis: 100%;
                display: flex;
            }
            .controls {
                display: flex;
                flex-basis: 100%;
                align-items: center;
                .btn {
                    padding: 10px;
                    margin: 10px;
                    border: 1px #fff solid;
                    &:hover {
                        background: #678;
                        cursor: pointer;
                    }
                }
                .progress-bar {
                    flex: 1;
                    display: flex;
                    .timeElapsed {

                    }
                    .progress {
                        flex: 100%;
                    }
                    .timeRemaining {

                    }
                }
            }
        }
        .dirContents {
            display: flex;
            flex-basis: 100%;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: stretch;
            align-self: stretch;
            align-items: center;
            overflow: auto;
            .item {
                padding: 10px;
                margin: 10px;
                flex-basis: 200px;
                background: #efefef;
                text-align: center;
            }
        }
    }
</style>
