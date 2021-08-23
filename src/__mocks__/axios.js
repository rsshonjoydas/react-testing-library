const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Shonjoy',
          last: 'Das',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/39.jpg',
        },
        login: {
          username: 'ThePhonyGOAT',
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockReturnValue(mockResponse),
};
