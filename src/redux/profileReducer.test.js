import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
  posts: [
    {id:1, message: 'Hello my name is Bob', likeCount: 22 },
    {id:2, message: "It's my first post", likeCount: 12 },
  ],
};

it('length should be incremented ', () => {
  //1 start data
  let action = addPost('bob-pro');
  //2 action
  let newState = profileReducer(state, action)
  //expectation
  expect (newState.posts.length).toBe(3);

});

it('message of new post should be:  bob-pro', () => {
  //1 start data
  let action = addPost('bob-pro');
  //2 action
  let newState = profileReducer(state, action)
  //expectation
  expect (newState.posts[2].message).toBe('bob-pro');
});

it('like a count should be 0', () => {
  //1 start data
  let action = addPost('bob-pro');
  //2 action
  let newState = profileReducer(state, action)
  //expectation
  expect (newState.posts[2].likeCount).toBe(0);
});

it('after deleting, length of message should be decrement', () => {
  //1 start data
  let action = deletePost(1);
  //2 action
  let newState = profileReducer(state, action)
  //expectation
  expect (newState.posts.length).toBe(1);
});

it(`after deleting, length shouldn't decrement if id is incorrect`, () => {
  //1 start data
  let action = deletePost(1000);
  //2 action
  let newState = profileReducer(state, action)
  //expectation
  expect (newState.posts.length).toBe(2);
});

