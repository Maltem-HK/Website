import 'babel-polyfill';
import { noCallThru } from 'proxyquire';
import chai, { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

const proxyquire = noCallThru();
const backendServiceStub = sinon.stub();
const dispatchSpy = sinon.spy();
const types = {
  WELCOME_HAS_ERRORED: 'WELCOME_HAS_ERRORED',
  WELCOME_IS_LOADING: 'WELCOME_IS_LOADING',
  WELCOME_FETCH_DATA_SUCCESS: 'WELCOME_FETCH_DATA_SUCCESS',
};

const {
  welcomeHasErrored, welcomeIsLoading, welcomeFetchDataSuccess, welcomeFetchData,
} = proxyquire('./welcome', {
  '../constants/action-types': types,
  '../services/backend': {
    getWelcomeWords: backendServiceStub,
  },
});

describe('Action welcome', () => {
  beforeEach(() => {
    backendServiceStub.reset();
    backendServiceStub.returns(Promise.resolve());
    dispatchSpy.resetHistory();
  });

  it('should call welcomeHasErrored successfully', () => {
    let response = welcomeHasErrored(true);
    expect(response.hasErrored).to.be.equal(true);
    response = welcomeHasErrored(false);
    expect(response.hasErrored).to.be.equal(false);
  });

  it('should call welcomeIsLoading successfully', () => {
    let response = welcomeIsLoading(true);
    expect(response.isLoading).to.be.equal(true);
    response = welcomeIsLoading(false);
    expect(response.isLoading).to.be.equal(false);
  });

  it('should call welcomeFetchDataSuccess successfully', () => {
    const data = { some: 'data' };
    const response = welcomeFetchDataSuccess(data);
    expect(response.data).to.deep.equal(data);
  });

  it('should call welcomeFetchData successfully', async () => {
    const res = { data: { some: 'data' } };
    backendServiceStub.returns(Promise.resolve(res));
    await welcomeFetchData()(dispatchSpy);

    expect(dispatchSpy).to.have.been.calledWith({
      type: types.WELCOME_IS_LOADING,
      isLoading: true,
    });
    expect(dispatchSpy).to.have.been.calledWith({
      type: types.WELCOME_IS_LOADING,
      isLoading: false,
    });
    expect(dispatchSpy).to.have.been.calledWith({
      type: types.WELCOME_FETCH_DATA_SUCCESS,
      data: res.data,
    });
  });

  it('should call welcomeFetchData and fail', async () => {
    backendServiceStub.returns(Promise.reject(new Error('service error')));

    try {
      await welcomeFetchData()(dispatchSpy);
    } catch (err) {
      expect(dispatchSpy).to.have.been.calledWith({
        type: types.WELCOME_IS_LOADING,
        isLoading: true,
      });
      expect(dispatchSpy).to.have.been.calledWith({
        type: types.WELCOME_HAS_ERRORED,
        hasErrored: true,
      });
    }
  });
});
