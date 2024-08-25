import { expect } from 'chai';
import chaiHttp from 'chai-http';
import chai from 'chai';
import app from './index.mjs';

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return Hello World', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World');
        done();
      });
  });
});