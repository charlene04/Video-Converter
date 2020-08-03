const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath("C:/ffmpeg/bin/ffmpeg.exe");
ffmpeg.setFfprobePath("C:/ffmpeg/bin");
const yargs = require("yargs");
const argv = yargs.argv;


var inFilename = __dirname + "/tmp/" + argv.current;
var outFilename = __dirname + "/converts/" + argv.new;
ffmpeg(inFilename)
  .noAudio()
  .outputOption("-vf", `setpts=PTS/${argv.speed}`)
  .save(outFilename)
  .run()
  console.log("Conversion is successful on prompt exit. Kindly wait.")