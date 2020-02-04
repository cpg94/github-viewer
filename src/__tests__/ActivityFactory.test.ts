import ActivityFactory from '../classes/ActivityFactory'
import fakeActivityStub from '../__mocks__/fakeActivity.js'
import activityStub from '../__mocks__/activity.js'
import Issue from '../classes/Issue';


test('Should return null if no valid activity is provided', () => {
  expect(new ActivityFactory(fakeActivityStub).getActivity()).toBe(undefined)
});

test('Should return instance of Issue ', () => {
  expect(new ActivityFactory(activityStub).getActivity()).toBeInstanceOf(Issue)
});