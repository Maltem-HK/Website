import 'babel-polyfill';
import { noCallThru } from 'proxyquire';
import nock from 'nock';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

const proxyquire = noCallThru();
const config = { backendURL: 'http://the-backend-you-deserve.com' };
let data;

const { getWelcomeWords, getSocialNetworks } = proxyquire('./backend', {
  '../config': config,
});

describe('backendService', () => {
  describe('getWelcomeWords', () => {
    beforeEach(() => {
      data = { words: ['Maltem', 'Awesome'] };

      nock(config.backendURL)
        .get('/welcomewords')
        .reply(200, data);
    });

    it('should call getWelcomeWords successfully', async () => {
      const response = await getWelcomeWords();
      expect(response.data).to.deep.equal(data);
    });
  });

  describe('getSocialNetworks', () => {
    beforeEach(() => {
      data = { socialNetworks: { facebook: '' } };

      nock(config.backendURL)
        .get('/socialnetworks')
        .reply(200, data);
    });

    it('should call getSocialNetworks successfully', async () => {
      const response = await getSocialNetworks();
      expect(response.data).to.deep.equal(data);
    });
  });
});
