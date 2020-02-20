---
id: proof-of-participation-consensus
title: "Proof of Participation Consensus"
---

<div align="justify">

Based on consideration of the various flaws and tradeoffs in the consensus mechanisms explored above,
ZooBC adopts a few elements of Proof of Stake and Federated consensus strategies with a novel algorithm
by Blockchain Zoo developed to prove that a node is performing useful work for the network,
called “Proof of Participation” consensus.

ZooBC maintains a federation of nodes which is called the “Node Registry”. Only nodes within the registry
are permitted to create blocks, and their probability to create the next block is more or less equal.
This is like Federated Consensus. However, any node operator can apply for a spot in this registry, and
their admittance into the registry is purely governed by the protocol rules, not by any centralized entity.
The rate at which new nodes which have applied are added to the registry is strictly limited by the protocol,
and the selection of which applicants will enter is governed by how much stake they are willing to lock.
This is somewhat like Proof of Stake, to the extent that staking tokens (a scarce resource on the network)
is used as a sybil prevention mechanism.

>The strategy of a locked stake required to join the “Node Registry” is applied in the first version of ZooBC
for the following reasons: 1) giving a use and a value to the first generated tokens due to demand and scarcity
and 2) limiting the initial growth of the node registry as it is hard to find tokens to put them in the stake
to join the registry. Future versions of ZooBC may change this requirement with simply a high fee to add
a node to the queue to join the node registry, and give access to the node registry to the nodes in queue that
collect more participation score, because 1) the registry shouldn’t be based on stake and 2) token liquidity will
support the growth of the user base.

Finally, when nodes in the “Node Registry” produce a block, they must include in the block some proof that they
have been contributing to the network (by honestly propagating transactions and blocks). Nodes which miss their
opportunity to create blocks, or which fail to include such proofs in their blocks, will gradually lose
“participation score” until they are automatically removed from the registry. In this way, an operator must
maintain a node which is in regular communication with the rest of the network to continue creating blocks and
collecting coinbase rewards.

Coinbase rewards: as for Bitcoin, ZooBC has no “pre-mined” tokens. At the beginning of the blockchain the total
amount of tokens in existence is zero. At each block new tokens are created and distributed to the nodes in the
registry. When a new block is created, based on its block seed, a pseudo-random selection of nodes will receive
new tokens. The new tokens created in the block are evenly distributed to the selected winners, but a node’s
probability of being selected as a winner is directly proportional to its participation score. In this way nodes
are strongly incentivized to maximize their participation score, as this also maximizes their profit on average.
After enough time, all nodes which are participating reliably should reach the maximum participation score,
making the distribution of new rewards between them essentially equal.

This is an element of fairness in rewards that most other blockchain technologies have not attempted to address.
For example, in Bitcoin, so long as you produce the block with the most work, no one can say whether you have
been participating in other regular network activity. It is largely taken on faith that node operators are
propagating blocks and transactions. In practice this leaves much of the hard work of decentralizing the network
to enthusiasts who run nodes because they care, despite their not having enough hashpower or stake to ever take
rewards from the network.

This strategy allows to overcome many of the flaws described in the previous algorithms. By virtue of using digital
signatures, ZooBC avoids Proof of Work’s energy consumption problem. By the use of an ever-growing federation of
nodes, ZooBC equalizes the probability of each node operator to add to the history and claim coinbase rewards,
and avoid the miner centralization problem of both Proof of Work and Proof of Stake. By requiring each node to
prove its participation (in the form of digitally signed messages from other nodes) ZooBC dramatically increases
the number of private keys which would be needed to be compromised for an attacker to forge a longer chain,
mitigating the key-stealing weakness of both Proof of Stake and Federated consensus. By allowing anyone to freely
apply for a spot in the node registry, ZooBC avoid the permissioned (and therefore centralized) nature of a
fully-Federated network.

In the long term, this Proof of Participation strategy results in a very large pool of nodes taking turns
contributing to the network history, and being equally rewarded for their service. Creating a longer chain
does not only require the keys of the majority stakeholders, but also of a majority of registered nodes in
the network. To attack a PoP chain, an attacker needs to control far more than half of the nodes in the registry.
Coming to possess of a large majority of the registry not only requires a large investment, but also requires
the time needed to have many new nodes gradually admitted into the registry, and carries the cost of running
real nodes proving their service to the network for the entire duration of the attack.
<div>