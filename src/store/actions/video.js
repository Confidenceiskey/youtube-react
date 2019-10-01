import { createAction, createRequestTypes, REQUEST, SUCCESS, FAILURE } from './index';

export const MOST_POPULAR = createRequestTypes('MOST_POPULAR');
export const mostPopular = {
  request: (amount, LoadDescription, nextPageToken) => createAction(MOST_POPULAR[REQUEST], {amount, loadDescription, nextToken}),
  success: (response) => createAction(MOST_POPULAR[SUCCESS], {response}),
  failure: (response) => createAction(MOST_POPULAR[FAILURE], {response})
};