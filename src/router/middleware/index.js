import beforeEach from './beforeEach'

const middleware = (router, store) => {
  beforeEach(router, store)
}

export default middleware
