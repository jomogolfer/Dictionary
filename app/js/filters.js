'use strict';

/* Filters */

angular.module('dictionaryFilters', [])

.filter('highlight', function($sce) {
 
  return function(wordMatch, phrase) {
      
      // Turn each word in wordMatch into a hyperlink
      wordMatch = wordMatch.replace(new RegExp('([a-zA-Z\x7f-\xff]+)((?![^{]*}))((?![^[]*]))', 'gi'),
          '<a href="#/word/$1">$1</a>');
      
      // Replace each | character with a line break 
      wordMatch = wordMatch.replace(/\|/g, '<br />');
      
      // if (phrase) wordMatch = wordMatch.replace(new RegExp('/['+phrase+']+((?![^<]*>))/','ig'),'<span class="highlight">$1</span>');
      
      console.log(wordMatch);
    
     // Highlight characters or letters that match the search criteria  
     wordMatch = wordMatch.replace(new RegExp('('+phrase+')+((?![^<]*>))', 'ig'),'<span class="highlight">$1</span>');
      
    return $sce.trustAsHtml(wordMatch);
  };
});