
function MainController() {
  this.title = 'Top Sellers';
  this.promo = 'Avengers';
  this.products = [
    {
      name: 'The Arsonist',
      price: 33,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/arsonist.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Losing Brave',
      price: 40,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/brave.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Think More Act Less',
      price: 43,
      pubdate: new Date('2017', '03', '08'),
      cover: 'img/actless.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Summer Bird Blue',
      price: 88,
      pubdate: new Date('1456', '08', '01'),
      cover: 'img/bird.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Into The Fire',
      price: 145,
      pubdate: new Date('2019', '03', '11'),
      cover: 'img/fire.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Big Magic',
      price: 862,
      pubdate: new Date('1456', '08', '01'),
      cover: 'img/magic.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Muscle',
      price: 62,
      pubdate: new Date('2019', '03', '11'),
      cover: 'img/muscle.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'JavaScript',
      price: 76,
      pubdate: new Date('1456', '08', '01'),
      cover: 'img/js.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'A Storm Of Swords',
      price: 371,
      pubdate: new Date('1456', '08', '01'),
      cover: 'img/storm.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Outsider',
      price: 76,
      pubdate: new Date('2019', '03', '11'),
      cover: 'img/outsider.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Perfect Nanny',
      price: 21,
      pubdate: new Date('1456', '08', '01'),
      cover: 'img/nanny.png',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Harry Potter',
      price: 44,
      pubdate: new Date('1456', '08', '01'),
      cover: 'img/potter.jpg',
      likes: 0,
      dislikes: 0
    }
  ],
  this.plusOne = function(index) {
    this.products[index].likes += 1;
  },
  this.minusOne = function(index) {
    this.products[index].dislikes += 1;
  }
}

angular
  .module('app')
  .controller('MainController', MainController);
