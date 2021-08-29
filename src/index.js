async function bootstrap() {
  throw new Error('ouch!')
}

// don't worry, it's not real..
const token = 'ghp_qwertyuioplkjhgfdszxcvbnmmnbvcxzasdf'

bootstrap().then(initVals => {
  console.log('>> Insecurity in progress - what could go wrong?', initVals)
}).catch(err => {
  console.error('Oh no! something bad happened..')
})

const update = '15:48gmt'
