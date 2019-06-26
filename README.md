# seed-poems

A quick experiment in generating seed phrases that appear (a bit) more like sentences than random jumbles of words. The hope is that this format is easier to memorize, however the results are not excellent. Perhaps this could be improved with better curated word lists, using adjectives, etc.

These word lists used are different from [bip-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) and therefore are not compatible.

### disclaimer

dont use this for anything other than experiments

### sample output

Each section of 3 lines is a single seed poem, equivalent to a 12 word seed phrase of entropy 
```
The creek horrifyingly con(s) the chalet
The dance irately latch(s) the criterion
The burrow crustily glimpse(s) the ashtray


The dependency inadvertently circle(s) the darn
The diner genially overheat(s) the baritone
The disdain classlessly deny(s) the ape


The colonisation jejunely overdo(s) the brain
The appendix indiscriminately fish(s) the codon
The antling breathtakingly fax(s) the boatyard


The bustle contritely access(s) the citrus
The crewmember logically balk(s) the delivery
The clave forgivingly giggle(s) the down


The capitulation lustrelessly long(s) the arm
The brunch indistinctly chuck(s) the bullet
The chromolithograph buoyantly decorate(s) the cook
```

### word lists

Each wordlist was selected hastily without much care. They are truncated to 2048 words at runtime, to provide the same bit density as bip39. Below are the origins. Some entries have been removed from the original word list.

- Verbs [verbs_pbw.txt](https://patternbasedwriting.com/elementary_writing_success/giant-verb-list-3250-verbs/)
- Nouns [nouns_dq.txt](http://www.desiquintans.com/nounlist)
- Adverbs [adv_ed.txt](http://www.esldesk.com/vocabulary/adverbs)