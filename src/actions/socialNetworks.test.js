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
  SOCIAL_NETWORKS_HAS_ERRORED: 'SOCIAL_NETWORKS_HAS_ERRORED',
  SOCIAL_NETWORKS_IS_LOADING: 'SOCIAL_NETWORKS_IS_LOADING',
  SOCIAL_NETWORKS_FETCH_DATA_SUCCESS: 'SOCIAL_NETWORKS_FETCH_DATA_SUCCESS',
};

const {
  socialNetworksHasErrored,
  socialNetworksIsLoading,
  socialNetworksFetchDataSuccess,
  socialNetworksFetchData,
} = proxyquire('./socialNetworks', {
  '../constants/action-types': types,
  '../services/backend': {
    getSocialNetworks: backendServiceStub,
  },
});

describe('Action socialNetworks', () => {
  beforeEach(() => {
    backendServiceStub.reset();
    backendServiceStub.returns(Promise.resolve());
    dispatchSpy.resetHistory();
  });

  it('should call socialNetworksHasErrored successfully', () => {
    let response = socialNetworksHasErrored(true);
    expect(response.hasErrored).to.be.equal(true);
    response = socialNetworksHasErrored(false);
    expect(response.hasErrored).to.be.equal(false);
  });

  it('should call socialNetworksIsLoading successfully', () => {
    let response = socialNetworksIsLoading(true);
    expect(response.isLoading).to.be.equal(true);
    response = socialNetworksIsLoading(false);
    expect(response.isLoading).to.be.equal(false);
  });

  it('should call socialNetworksFetchDataSuccess successfully', () => {
    const data = { some: 'data' };
    const response = socialNetworksFetchDataSuccess(data);
    expect(response.data).to.deep.equal(data);
  });

  it('should call welcomeFetchData successfully', async () => {
    const res = { data: [{ some: 'data' }] };
    backendServiceStub.returns(Promise.resolve(res));
    await socialNetworksFetchData()(dispatchSpy);

    expect(dispatchSpy).to.have.been.calledWith({
      type: types.SOCIAL_NETWORKS_IS_LOADING,
      isLoading: true,
    });
    expect(dispatchSpy).to.have.been.calledWith({
      type: types.SOCIAL_NETWORKS_IS_LOADING,
      isLoading: false,
    });
    expect(dispatchSpy).to.have.been.calledWith({
      type: types.SOCIAL_NETWORKS_FETCH_DATA_SUCCESS,
      data: res.data[0],
    });
  });

  it('should call welcomeFetchData and fail', async () => {
    backendServiceStub.returns(Promise.reject(new Error('service error')));

    try {
      await socialNetworksFetchData()(dispatchSpy);
    } catch (err) {
      expect(dispatchSpy).to.have.been.calledWith({
        type: types.SOCIAL_NETWORKS_IS_LOADING,
        isLoading: true,
      });
      expect(dispatchSpy).to.have.been.calledWith({
        type:
        types.SOCIAL_NETWORKS_HAS_ERRORED,
        hasErrored: true,
      });
    }
  });
});
