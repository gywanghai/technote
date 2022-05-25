(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{570:function(a,t,r){"use strict";r.r(t);var s=r(30),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),r("p",[a._v("本部分内容参考微信公众号"),r("strong",[a._v("彤哥读源码")]),a._v("中"),r("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkxNDEyOTI0OQ==&action=getalbum&album_id=1538024362992254978&scene=173&from_msgid=2247484457&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("JDK源码"),r("OutboundLink")],1),a._v("系列文章整理而成。")])]),a._v(" "),r("h2",{attrs:{id:"_1-arraylist-和-linkedlist-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-arraylist-和-linkedlist-有什么区别"}},[a._v("#")]),a._v(" 1. ArrayList 和 LinkedList 有什么区别?")]),a._v(" "),r("p",[a._v("ArrayList 底层数据结构是数组，数组支持按下标随机访问数组中的元素，平均时间复杂度为 O(1)；数组在尾部添加、删除元素的平均时间复杂度为O(1)，在其他位置添加、删除元素需要移动下标位置之后的元素，平均时间复杂度为 O(n)；ArrayList 在添加元素时如果发现数组剩余空间不足，会先进行扩容。扩容时，先创建一个新的数组，新数组容量是旧数组容量的1.5倍，然后把数组中的元素一一拷贝到新的数组中。由于扩容需要把数组元素从旧数组拷贝到新数组中，会有一定的性能损耗。")]),a._v(" "),r("p",[a._v("LinkedList 底层数据结构是链表，链表不支持随机访问，查找元素需要从链表的第一个元素开始进行遍历，平均时间复杂度为 O(n)；指定位置插入、删除元素的平均时间复杂度为 O(1)；链表不需要连续的内存空间，所以不需要扩容。但是链表节点除了存储元素数据以外，还需要存储指向下一个节点的指针信息，有额外的内存开销。")]),a._v(" "),r("h2",{attrs:{id:"_2-arraylist是怎么扩容的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-arraylist是怎么扩容的"}},[a._v("#")]),a._v(" 2. ArrayList是怎么扩容的？")]),a._v(" "),r("ol",[r("li",[a._v("检查是否需要扩容。")]),a._v(" "),r("li",[a._v("计算新容量，是旧容量的1.5倍 (oldCapacity + oldCapacity >> 1)，如果发现新容量比实际需要的容量还小，则以需要的容量为准。")]),a._v(" "),r("li",[a._v("创建新容量的数组并把旧数组的元素拷贝到新数组。")])]),a._v(" "),r("h2",{attrs:{id:"_3-arraylist-插入、删除、查询元素的时间复杂度各是多少"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-arraylist-插入、删除、查询元素的时间复杂度各是多少"}},[a._v("#")]),a._v(" 3. ArrayList 插入、删除、查询元素的时间复杂度各是多少？")]),a._v(" "),r("ol",[r("li",[a._v("尾部插入、删除元素的平均时间复杂度为 O(1); 其他位置插入、删除元素的平均时间复杂度为 O(n)。")]),a._v(" "),r("li",[a._v("随机查询元素的时间复杂度为 O(1)。")])]),a._v(" "),r("h2",{attrs:{id:"_4-怎么求两个集合的并集、交集、差集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-怎么求两个集合的并集、交集、差集"}},[a._v("#")]),a._v(" 4. 怎么求两个集合的并集、交集、差集？")]),a._v(" "),r("ol",[r("li",[a._v("ArrayList 支持求并集，调用 addAll(Collection c)方法即可。")]),a._v(" "),r("li",[a._v("ArrayList 支持求交集，调用 retainAll(Collection c)方法即可。")]),a._v(" "),r("li",[a._v("ArrayList 支持求差集，调用 removeAll(Collection c)方法即可。")])]),a._v(" "),r("h2",{attrs:{id:"_5-arraylist-是怎么实现序列化和反序列化的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-arraylist-是怎么实现序列化和反序列化的"}},[a._v("#")]),a._v(" 5. ArrayList 是怎么实现序列化和反序列化的？")]),a._v(" "),r("p",[a._v("ArrayList 实现了 Serializable 接口，在 writeObject() 方法中先调用了 s.defaultWriteObject(java.io.ObjectOutputStream s) 方法，写入非 transient 的属性，也就是 size 属性；同样地，在 readObject(java.io.ObjectOutputStream s) 方法中先调用了 s.defaultReadObject() 方法解析出了 size 属性。 elementData 定义为transient 的优势，自己根据 size 序列化真实的元素，而不是根据数组的长度序列化元素，减少了空间占用。")]),a._v(" "),r("h2",{attrs:{id:"_6-arraylist-的方法-toarray-有什么问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-arraylist-的方法-toarray-有什么问题"}},[a._v("#")]),a._v(" 6. ArrayList 的方法 toArray() 有什么问题？")]),a._v(" "),r("p",[a._v("ArrayList 的 toArray() 方法返回值是 Object[]，ArrayList 的 子类可重写 toArray() 方法，返回值类型可以和父类的不一样。如果子类的返回值不是Object[]，拷贝元素时需要重新拷贝成 Object[].class 类型。")]),a._v(" "),r("h2",{attrs:{id:"_7-什么是-fail-fast"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-什么是-fail-fast"}},[a._v("#")]),a._v(" 7. 什么是 Fail-Fast？")]),a._v(" "),r("p",[a._v("Fail-Fast，快速失败，集合的一种错误机制，当使用迭代器迭代时，如果发现集合有修改，则快速失败做出响应，抛出ConcurrentModificationException。")]),a._v(" "),r("p",[a._v("支持 Fail-Fast 机制的集合类有一个成员变量 modCount，在添加、删除元素时，modCount 会自增加 1。使用迭代器遍历前会将迭代器的成员变量 expectedModCount 的值设置为 该集合当前 modCount 的值，遍历过程中如果检测到 modCount 的值发生了改变 ，就意味着该集合发生了修改，此时就会快速失败抛出ConcurrentModificationException。")]),a._v(" "),r("p",[a._v("哪些集合支持Fail-Fast?")]),a._v(" "),r("ul",[r("li",[a._v("ArrayList")]),a._v(" "),r("li",[a._v("HashSet")]),a._v(" "),r("li",[a._v("HashMap")])]),a._v(" "),r("h2",{attrs:{id:"_8-linkedlist是单链表还是双链表实现的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-linkedlist是单链表还是双链表实现的"}},[a._v("#")]),a._v(" 8. LinkedList是单链表还是双链表实现的？")]),a._v(" "),r("p",[a._v("LinkedList 是一个以双向链表实现的 List，不仅实现了List 接口，还实现了 Queue 和 Deque接口，所以可以作为队列(双端队列)或者栈来使用。")]),a._v(" "),r("h2",{attrs:{id:"_9-linkedlist是单链表还是双链表实现的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-linkedlist是单链表还是双链表实现的"}},[a._v("#")]),a._v(" 9. LinkedList是单链表还是双链表实现的？")]),a._v(" "),r("p",[a._v("LinkedList 是一个以双向链表实现的 List，不仅实现了List 接口，还实现了 Queue 和 Deque接口，所以可以作为队列(双端队列)或者栈来使用。")]),a._v(" "),r("h2",{attrs:{id:"_10-linkedlist-除了作为-list-还有什么用处"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10-linkedlist-除了作为-list-还有什么用处"}},[a._v("#")]),a._v(" 10. LinkedList 除了作为 List 还有什么用处？")]),a._v(" "),r("p",[a._v("LinkedList 是一个以双向链表实现的 List，不仅实现了List 接口，还实现了 Queue 和 Deque接口，所以还可以作为队列(双端队列)或者栈来使用。")]),a._v(" "),r("h2",{attrs:{id:"_11-linkedlist-插入、删除、查询元素的时间复杂度各是多少"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-linkedlist-插入、删除、查询元素的时间复杂度各是多少"}},[a._v("#")]),a._v(" 11. LinkedList 插入、删除、查询元素的时间复杂度各是多少？")]),a._v(" "),r("ol",[r("li",[a._v("尾部插入、删除元素的平均时间复杂度为O(1)，中间位置插入、删除元素需要通过遍历才能找到插入、删除元素的位置，平均时间复杂度为O(n)。")]),a._v(" "),r("li",[a._v("查询元素的平均复杂度为O(n)。")]),a._v(" "),r("li",[a._v("LinkedList 遍历推荐使用迭代器的方式进行遍历，迭代器遍历的平均时间复杂度为 O(n)。增强 for 循环底层也是使用迭代器，所以使用增强 for 循环遍历 LinkedList 的平均时间复杂度也是 O(n)。使用普通 for 循环遍历 LinkedList 的时间复杂度是 O(n^2)，因为每一次循环都要通过inde")])]),a._v(" "),r("h2",{attrs:{id:"_12-什么是随机访问"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_12-什么是随机访问"}},[a._v("#")]),a._v(" 12. 什么是随机访问？")]),a._v(" "),r("p",[a._v("查询指定元素不用从头开始向尾部遍历，可以直接通过计算得到目标元素存储的位置，直接从那个存储单元中读取到指定的元素。")]),a._v(" "),r("h2",{attrs:{id:"_13-哪些集合支持随机访问-它们都有哪些共性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_13-哪些集合支持随机访问-它们都有哪些共性"}},[a._v("#")]),a._v(" 13. 哪些集合支持随机访问？它们都有哪些共性？")]),a._v(" "),r("p",[a._v("支持随机访问的集合有：ArrayList，CopyOnWriteArrayList。它们都实现了 RandomAccess 接口。")]),a._v(" "),r("h2",{attrs:{id:"_14-copyonwritearraylist-是怎么保证并发安全的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_14-copyonwritearraylist-是怎么保证并发安全的"}},[a._v("#")]),a._v(" 14. CopyOnWriteArrayList 是怎么保证并发安全的?")]),a._v(" "),r("p",[a._v("CopyOnWriteArrayList 是 ArrayList 的线程安全版本。对于写操作，CopyOnWriteArrayList 将所有元素复制到一个新的数组中，在新的数组中进行操作，然后将元素数组的引用指向新的数组，这个过程中会使用 ReentrantLock 进行加锁，保证并发处理写请求的线程安全；底层的 Object 数组 array 是真正存储元素的地方，array用 volatile 修饰，保证一个线程对 array 的修改对另外一个线程可见；对于读操作，仍然从旧的数组中进行读取。这样保证了只阻塞写操作，不阻塞读操作，实现读写分离。但是读操作可能会读到旧的数据，所以 CopyOnWriteArrayList 只能保证数据的最终一致性，不能保证数据的实时一致性。")]),a._v(" "),r("h2",{attrs:{id:"_15-copyonwritearraylist-的实现采用了什么思想"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_15-copyonwritearraylist-的实现采用了什么思想"}},[a._v("#")]),a._v(" 15. CopyOnWriteArrayList 的实现采用了什么思想？")]),a._v(" "),r("p",[a._v("CopyOnWriteArrayList 的实现采用了写时复制和读写分离的思想。对于写操作，CopyOnWriteArrayList 将所有元素复制到一个新的数组中，在新的数组中进行操作，然后将元素数组的引用指向新的数组，这个过程中会使用 ReentrantLock 进行加锁，保证并发处理写请求的线程安全；底层的 Object 数组 array 是真正存储元素的地方，array用 volatile 修饰，保证一个线程对 array 的修改对另外一个线程可见；对于读操作，仍然从旧的数组中进行读取。这样保证了只阻塞写操作，不阻塞读操作，实现读写分离。但是读操作可能会读到旧的数据，所以 CopyOnWriteArrayList 只能保证数据的最终一致性，不能保证数据的实时一致性。")]),a._v(" "),r("h2",{attrs:{id:"_16-copyonwritearraylist-是不是强一致性的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_16-copyonwritearraylist-是不是强一致性的"}},[a._v("#")]),a._v(" 16. CopyOnWriteArrayList 是不是强一致性的？")]),a._v(" "),r("p",[a._v("CopyOnWriteArrayList 的实现采用了写时复制和读写分离的思想。对于写操作，CopyOnWriteArrayList 将所有元素复制到一个新的数组中，在新的数组中进行操作，然后将元素数组的引用指向新的数组；对于读操作，仍然从旧的数组中进行读取。这样保证了只阻塞写操作，不阻塞读操作，实现读写分离。但是读操作可能会读到旧的数据，所以 CopyOnWriteArrayList 只能保证数据的最终一致性，不能保证数据的实时一致性。")]),a._v(" "),r("h2",{attrs:{id:"_17-copyonwritearraylist-适用于什么样的场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_17-copyonwritearraylist-适用于什么样的场景"}},[a._v("#")]),a._v(" 17. CopyOnWriteArrayList 适用于什么样的场景？")]),a._v(" "),r("p",[a._v("CopyOnWriteArrayList 适用于读多写少、且能容忍短暂时间内数据不一致的场景。")]),a._v(" "),r("p",[a._v("原因：CopyOnWriteArrayList 的实现采用了写时复制和读写分离的思想。对于写操作，CopyOnWriteArrayList 将所有元素复制到一个新的数组中，在新的数组中进行操作，然后将元素数组的引用指向新的数组；对于读操作，仍然从旧的数组中进行读取。这样保证了只阻塞写操作，不阻塞读操作，实现读写分离。但是读操作可能会读到旧的数据，所以 CopyOnWriteArrayList 只能保证数据的最终一致性，不能保证数据的实时一致性。")]),a._v(" "),r("h2",{attrs:{id:"_18-copyonwritearraylist-插入、删除、查询元素的时间复杂度各是多少"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_18-copyonwritearraylist-插入、删除、查询元素的时间复杂度各是多少"}},[a._v("#")]),a._v(" 18. CopyOnWriteArrayList 插入、删除、查询元素的时间复杂度各是多少？")]),a._v(" "),r("p",[a._v("CopyOnWriteArrayList 尾部插入元素的平均时间复杂度为 O(1)，其他位置插入元素的平均时间复杂度为 O(n)。")]),a._v(" "),r("p",[a._v("CopyOnWriteArrayList 尾部插入元素的平均时间复杂度为 O(1)，其他位置删除元素的平均时间复杂度为 O(n)。")]),a._v(" "),r("p",[a._v("CopyOnWriteArrayList 按索引查询元素的平均时间复杂度为 O(1)。")]),a._v(" "),r("h2",{attrs:{id:"_19-copyonwritearraylist-为什么没有-size-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_19-copyonwritearraylist-为什么没有-size-属性"}},[a._v("#")]),a._v(" 19. CopyOnWriteArrayList 为什么没有 size 属性？")]),a._v(" "),r("p",[a._v("每次修改都是新建一份正好可以存储目标个数元素的数组，并进行数据拷贝，数组的长度就是集合的大小，所以不需要 size 属性。")]),a._v(" "),r("h2",{attrs:{id:"_20-什么是散列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_20-什么是散列表"}},[a._v("#")]),a._v(" 20. 什么是散列表？")]),a._v(" "),r("p",[a._v("散列表是一种数据结构，根据散列算法将 key 转化为数组的下标值，并把该元素存放在数组中的下标位置处，根据指定 key 查询时，按照相同的散列算法计算出 key 对应的数组下标值，到数组的下标位置处看该位置是否存在元素，如果存在而且元素对应的 key 与需要查询的 key 相等，就返回该元素。添加元素时，不同的 key 计算出来的下标值可能相同，这样就会产生冲突，解决这种冲突有 3 种常见的方法：拉链法、开放寻址法、再哈希法。")]),a._v(" "),r("p",[a._v("拉链法，是指发生冲突时，在数组指定下标位置处存放的是一个链表，就把要添加的元素加入到链表中，查询时如果数组下标位置处是一个链表，则遍历链表，查询目标 key 对应的元素是否在链表中。")]),a._v(" "),r("p",[a._v("开放寻址法，是指发生冲突时，则从该位置向后开始寻找，看能否找到一个没有存放元素的位置，如果存在，则把目标元素存放在该位置。查询时，如果计算出来的数组下标位置已经有元素了，则需要从那个位置开始的每个元素逐个进行比较，直到找到目标元素或者已经比对过指定位置之后的所有元素为止。实现复杂，效率低下。")]),a._v(" "),r("p",[a._v("再哈希法，是指发生冲突时，采用另一种散列算法计算元素在数组中的存放位置。直到找到一个没有元素的位置，如果找到，则把目标元素存放在数组的该位置。查询时，如果计算出来的数组下标位置处不是目标元素了，则选择另一种散列算法进行计算，直到找到目标元素或者已经比对，实现起来比较复杂，效率也很低下。")]),a._v(" "),r("h2",{attrs:{id:"_21-怎么实现一个散列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_21-怎么实现一个散列表"}},[a._v("#")]),a._v(" 21. 怎么实现一个散列表？")]),a._v(" "),r("ol",[r("li",[a._v("选择合适的散列算法。选择合适的散列算法。散列算法的选择需要考虑尽可能地减少哈希冲突的概率。")])]),a._v(" "),r("p",[a._v("JDK 中的实现：key的哈希值 ^ (key的哈希值 >>> 16) & (length - 1)。高16位与低16位进行异或，然后再和数组长度求模。数组长度为 2 的 N 次幂。")]),a._v(" "),r("div",{staticClass:"language-java line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("hash")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" key"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" h"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("h "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" key"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("hashCode")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("h "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>>")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br")])]),r("p",[a._v("为什么数组的长度是 2 的 N 次幂？")]),a._v(" "),r("p",[a._v("因为当数组的长度为 2 的 N 次幂时，hashcode & (length - 1) = hashcode % length。取模运算速度比为异或运算快得多，所以当 length 为 2 的 N 次幂时，就可以用异或运算替代取模运算提升散列算法的效率。")]),a._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[a._v("使用链表法处理哈希冲突。添加元素时，如果没有发生哈希冲突，即该数据桶上没有元素，则把元素直接放到该数据桶中。如果发生哈希冲突，且该数据桶中存放的不是链表，则创建一个链表，放在该数据桶处，并把原来的元素和待添加的元素添加到链表中。如果发生哈希冲突，且该数据桶处存放的已经是链表了，则顺着链表查询要添加的元素是否已经存在了，如果已经存在则修改该元素对应的 value，否则将元素添加到链表的末尾。")])]),a._v(" "),r("li",[r("p",[a._v("扩容。当哈希表中的元素超过指定阈值时，发生哈希冲突的概率会大大增加，哈希表的查询和修改的性能大大降低。这时，就需要对哈希表进行扩容。扩容的过程是这样的：计算新的容量，新的容量是旧容量的 2 倍，根据新的容量创建新的数组，并遍历旧数组中的元素转移到新的数组中。具体过程是：如果原来桶的位置存储的是一个元素，则将该元素移动到新数组中对应的桶的位置处；如果原来桶的位置存储的是一个链表，原链表分化成为两个链表，低位链表存储在原来桶的位置，高位链表存储在原来桶的位置加旧容量的位置；如果原来桶的位置存放的是红黑树，则把树拆散成为两棵树插入到新的桶中去。")])])]),a._v(" "),r("h2",{attrs:{id:"_22-java-1-8-对-hashmap-实现方式做了哪些改进"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22-java-1-8-对-hashmap-实现方式做了哪些改进"}},[a._v("#")]),a._v(" 22. Java 1.8 对 HashMap 实现方式做了哪些改进？")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("Java 1.7 中底层数据结构是数组 + 链表，Java 1.8 中底层数据结构是数组 + 链表 + 红黑树，使用红黑树的目的是提高 HashMap 插入和查询的整体效率。")])]),a._v(" "),r("li",[r("p",[a._v("发生哈希冲突时，Java 1.7 使用头插法将元素添加到链表中，Java 1.8 采用的则是尾插法。因为 Java 1.8 中插入 key 和 value 时需要判断链表元素个数，所以需要遍历链表统计链表元素个数，所以正好就直接使用尾插法。")])]),a._v(" "),r("li",[r("p",[a._v("Java 1.7 中哈希算法比较复杂，存在各种右移与异或操作，Java 1.8 中进行了简化，因为复杂的哈希算法的目的就是提高散列性来提高 HashMap 的整体效率，而 Java 1.8 中新增了红黑树，所以可以适当地简化哈希算法，节省 CPU 资源。")])])]),a._v(" "),r("h2",{attrs:{id:"_23-hashmap-的容量有什么特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_23-hashmap-的容量有什么特点"}},[a._v("#")]),a._v(" 23. HashMap 的容量有什么特点？")]),a._v(" "),r("p",[a._v("HashMap 的容量是 2 的 n 次幂。当 HashMap 的容量是 2 的 n 次幂时，可以使用较快的与运算替代较慢的取模运算，提高散列算法的执行效率。即当length 为 2 的 n 次幂时， hash & (length - 1) = hash % length。")]),a._v(" "),r("h2",{attrs:{id:"_24-hashmap是怎么进行扩容的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_24-hashmap是怎么进行扩容的"}},[a._v("#")]),a._v(" 24. HashMap是怎么进行扩容的？")]),a._v(" "),r("ol",[r("li",[a._v("首先创建新的数组，新的数组的容量是旧数组容量的 2 倍。")]),a._v(" "),r("li",[a._v("遍历旧数组，如果数据桶上存储的是实际的元素，则将该桶上的元素复制到新数组中的原来桶的位置；如果数据桶上存储的是一个链表，则把低位链表移动到新数组中原来桶的位置，高位链表移动到新数组中原来桶的位置加上旧数组的容量的位置处；如果数据桶上存储的是一棵红黑树，则将树拆分成两个树插入到新的桶中去。")])]),a._v(" "),r("h2",{attrs:{id:"_25-hashmap中的元素是否是有序的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_25-hashmap中的元素是否是有序的"}},[a._v("#")]),a._v(" 25. HashMap中的元素是否是有序的？")]),a._v(" "),r("p",[a._v("HashMap 中的元素不是有序的。")]),a._v(" "),r("h2",{attrs:{id:"_26-hashmap-何时进行树化-何时进行反树化-为什么要这么设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_26-hashmap-何时进行树化-何时进行反树化-为什么要这么设计"}},[a._v("#")]),a._v(" 26. HashMap 何时进行树化？何时进行反树化？为什么要这么设计？")]),a._v(" "),r("p",[a._v("当某个数据桶处的链表长度大于 8 且数据桶的个数 大于 64 时会把链表转化为红黑树，即树化。")]),a._v(" "),r("p",[a._v("当某个数据桶处的红黑树节点个数小于 6 时，会把红黑树转化成链表，即反树化。")]),a._v(" "),r("p",[a._v("在链表中查找一个元素的平均时间复杂度是 O(n)，而从红黑树中查找一个元素的时间复杂度是 O(log n)。当 n > 8 时，红黑树查找的开销远远小于链表查找的开销，而且当哈希数组的长度小于64时，扩容所带来的收益比进行树化的收益大，所以当哈希数组的长度小于64时优先进行扩容；当某个数据桶处的链表长度大于 8 且数据桶的个数 大于 64 时会把链表转化为红黑树，以此来提升查询和插入效率。")]),a._v(" "),r("p",[a._v("而当数组的某一个桶上的的节点个数小于 6 时，使用链表进行查询、插入的开销要比红黑树的要小，所以，当某个数据桶上的节点个数小于6时，会把红黑树转换为链表。")]),a._v(" "),r("h2",{attrs:{id:"_27-hashmap-插入、删除、查询元素的时间复杂度各是多少"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_27-hashmap-插入、删除、查询元素的时间复杂度各是多少"}},[a._v("#")]),a._v(" 27. HashMap 插入、删除、查询元素的时间复杂度各是多少？")]),a._v(" "),r("p",[a._v("HashMap 插入的平均时间复杂度是 O(1)。")]),a._v(" "),r("p",[a._v("HashMap 删除的平均时间复杂度是 O(1)。")]),a._v(" "),r("p",[a._v("HashMap 查询的平均时间复杂度是 O(1)。")]),a._v(" "),r("h2",{attrs:{id:"_28-linkedhashmap-是怎么实现的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_28-linkedhashmap-是怎么实现的"}},[a._v("#")]),a._v(" 28. LinkedHashMap 是怎么实现的？")]),a._v(" "),r("ol",[r("li",[r("p",[a._v('LinkedHashMap 继承 HashMap，HashMap 使用(数组 + 单链表 + 红黑树)的存储结构，LinkedHashMap 在这三种结构之上，还额外添加了一种"双向链表"的结构存储所有元素的顺序。')])]),a._v(" "),r("li",[r("p",[a._v("LinkedHashMap 中 head 表示双向链表的头节点，旧数据存在头节点，tail 表示双向链表的尾节点，新数据存在尾节点。accessOrder 表示是否按访问顺序排序，如果为 false 则按插入顺序存储元素，如果为 true 则按访问顺序存储元素。")])]),a._v(" "),r("li",[r("p",[a._v("LinkedHashMap 中的存储节点，继承自 HashMap 的 Node 类，next 用于单链表存储于桶中，before 和 after 用于双向链表存储所有元素。")])]),a._v(" "),r("li",[r("p",[a._v("LinkedHashMap 不带 accessOrder 参数的构造方法中，accessOrder 属性为 false，表示双向链表是按插入顺序存储元素。带 accessOrder 参数的构造方法如果传入 true，则可以实现按访问顺序存储元素，这也是实现LRU缓存策略的关键。")])]),a._v(" "),r("li",[r("p",[a._v("LinkedHashMap 中插入元素之后，会调用 afterNodeInsertion(boolean evict) 方法，这个方法是在 HashMap 中定义的空方法，LinkedHashMap 进行了重写，如果 evict 参数 true 且 removeEldestEntry() 方法返回true，则删除头节点，并且调用 afterNodeRemoval() 方法。 afterNodeRemoval() 方法在 HashMap 中也是空方法，LinkedHashMap 进行了重写，LinkedHashMap#afterNodeRemoval 方法中，用来在移除元素后修改双向链表：将指定节点从双向链表中删除。默认 removeEldestEntry() 方法返回 false，也就是不删除元素。如果我们重写removeEldestEntry() 方法，在满足一定的条件时返回true 时，就会删除元素。")])]),a._v(" "),r("li",[r("p",[a._v("LinkedHashMap 重写了 HashMap 的 get 方法，如果查找到目标的节点，且 accessOrder 为 true，且访问的不是尾节点，则调用 afterNodeAccess(Node<K,V> e) 方法，afterNodeAccess 方法中，从双向链表中移除访问的节点，将访问的节点移动到双向链表的尾部。")])])]),a._v(" "),r("h2",{attrs:{id:"_29-linkedhashmap-是有序的吗-怎么个有序法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_29-linkedhashmap-是有序的吗-怎么个有序法"}},[a._v("#")]),a._v(" 29. LinkedHashMap 是有序的吗？怎么个有序法？")]),a._v(" "),r("p",[a._v("LinkedHashMap 是有序的，如果 accessOrder 为true，则可以按照访问元素的顺序遍历元素。")]),a._v(" "),r("p",[a._v("如果 accessOrder 为 false，则可以按照插入元素的顺序遍历元素。")]),a._v(" "),r("h2",{attrs:{id:"_30-linkedhashmap-如何实现-lru-缓存淘汰策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_30-linkedhashmap-如何实现-lru-缓存淘汰策略"}},[a._v("#")]),a._v(" 30. LinkedHashMap 如何实现 LRU 缓存淘汰策略？")]),a._v(" "),r("ol",[r("li",[a._v("实现一个 LRU 类，继承 LinkedHashMap，在构造方法中设置 accessOrder 为 true，以及保存缓存的容量 capacity")]),a._v(" "),r("li",[a._v("重写 removeEldestEntry() 方法，当元素个数大于了缓存的容量，就移除元素。")])]),a._v(" "),r("h2",{attrs:{id:"_31-weakhashmap-底层数据结构是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_31-weakhashmap-底层数据结构是什么"}},[a._v("#")]),a._v(" 31. WeakHashMap 底层数据结构是什么？")]),a._v(" "),r("p",[a._v("WeakHashMap 是一种弱引用 map，内部的 key 会存储为弱引用，当垃圾回收时，会被没有强引用的 key 回收掉，下一次当我们操作 map 的时候会把对应的 Entry 删除掉，基于这种特性，WeakHashMap 适用于缓存处理。")]),a._v(" "),r("p",[a._v("WeakHashMap 在 GC 的时候会把没有强引用的 key 回收掉，所以注定了它里面的元素不会太多，因为也就不需要像 HashMap 那样元素多的时候进行树化处理了。因此，WeakHashMap 的存储结构是：数组 + 链表。")]),a._v(" "),r("h2",{attrs:{id:"_32-weakhashap-具有什么特性-通常用来做什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_32-weakhashap-具有什么特性-通常用来做什么"}},[a._v("#")]),a._v(" 32. WeakHashap 具有什么特性？通常用来做什么？")]),a._v(" "),r("p",[a._v("WeakHashMap 是一种弱引用 map，内部的 key 会存储为弱引用，当垃圾回收时，会被没有强引用的 key 回收掉，下一次当我们操作 map 的时候会把对应的 Entry 删除掉，基于这种特性，WeakHashMap 适用于缓存处理。")]),a._v(" "),r("p",[a._v("WeakHashMap 没有实现 Clone 和 Serializable 接口，所以不具有克隆和序列化的特性。")]),a._v(" "),r("h2",{attrs:{id:"_33-weakhashmap-使用-string-作为-key-时需要注意什么-为什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_33-weakhashmap-使用-string-作为-key-时需要注意什么-为什么"}},[a._v("#")]),a._v(" 33. WeakHashMap 使用 String 作为 key 时需要注意什么？为什么？")]),a._v(" "),r("p",[a._v("使用 String 作为 key 时，一定要使用 new String() 这样的方式声明 key，才会失效，其它基本类型的包装类型也是一样的。")]),a._v(" "),r("h2",{attrs:{id:"_34-什么是弱引用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_34-什么是弱引用"}},[a._v("#")]),a._v(" 34. 什么是弱引用？")]),a._v(" "),r("p",[a._v("强引用：如果一个对象具有强引用，它绝对不会被 GC 回收。如果内存空间不足了，GC 宁愿抛出 OutOfMemoryError，也不会回收具有强引用的对象。")]),a._v(" "),r("p",[a._v("软引用：如果一个对象只具有软引用，当内存空间充足时不会回收它，但内存空间不足时就会回收这部分对象。只要这个具有软引用的对象没有被回收，程序就可以正常使用。")]),a._v(" "),r("p",[a._v("弱引用：如果一个对象只具有弱引用，不管内存空间是否充足，都会在下一次 GC 时被回收。")]),a._v(" "),r("p",[a._v("虚引用：如果一个对象只具有虚引用，那么它就和没有任何引用一样，任何时候都可能被 GC 回收。")]),a._v(" "),r("p",[a._v("软、弱、虚引用必须和一个引用队列 (ReferenceQueue) 一起使用，当 GC 回收这个软、弱、虚引用引用的对象时，会把这个引用放到引用队列中。")]),a._v(" "),r("h2",{attrs:{id:"_35-红黑树具有哪些特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_35-红黑树具有哪些特性"}},[a._v("#")]),a._v(" 35. 红黑树具有哪些特性？")]),a._v(" "),r("ol",[r("li",[a._v("每个节点的颜色为红色或黑色")]),a._v(" "),r("li",[a._v("根节点是黑色")]),a._v(" "),r("li",[a._v("每个叶子结点是黑色")]),a._v(" "),r("li",[a._v("如果一个节点是红色的，则它的子节点必须是黑色的")]),a._v(" "),r("li",[a._v("从一个节点到该节点的子孙节点的所有路径上包含相同数目的黑色节点")])]),a._v(" "),r("h2",{attrs:{id:"_36-treemap-是有序的吗-怎么个有序法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_36-treemap-是有序的吗-怎么个有序法"}},[a._v("#")]),a._v(" 36. TreeMap 是有序的吗？怎么个有序法？")]),a._v(" "),r("p",[a._v("TreeMap 使用红黑树存储元素，可以保证元素按 key 值大小进行遍历。")]),a._v(" "),r("p",[a._v("如果构造方法指定了 Comparator 比较器，则按指定的 Comparator 的规则进行排序。")]),a._v(" "),r("p",[a._v("如果构造方法没有指定 Comparator 比较器，则 key 必须实现 Comparable 接口，按指定的 Comparable 的规则进行排序")]),a._v(" "),r("h2",{attrs:{id:"_37-treemap-是否需要扩容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_37-treemap-是否需要扩容"}},[a._v("#")]),a._v(" 37. TreeMap 是否需要扩容？")]),a._v(" "),r("p",[a._v("TreeMap 底层数据结构是红黑树，所以不需要扩容。")]),a._v(" "),r("h2",{attrs:{id:"_38-treemap-是怎么遍历的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_38-treemap-是怎么遍历的"}},[a._v("#")]),a._v(" 38. TreeMap 是怎么遍历的？")]),a._v(" "),r("ol",[r("li",[a._v("从 root 遍历整个树")]),a._v(" "),r("li",[a._v("如果待查找的 key 比当前遍历到的 key 小，则在左子树中查找")]),a._v(" "),r("li",[a._v("如果待查找的 key 比当前遍历到的 key 大，则在右子树中查找")]),a._v(" "),r("li",[a._v("如果待查找的 key 与当前遍历到的 key 相等，则找到了该元素，直接返回。")])]),a._v(" "),r("h2",{attrs:{id:"_39-treemap-插入、删除、查询元素的时间复杂度是多少"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_39-treemap-插入、删除、查询元素的时间复杂度是多少"}},[a._v("#")]),a._v(" 39. TreeMap 插入、删除、查询元素的时间复杂度是多少？")]),a._v(" "),r("p",[a._v("TreeMap 查询、插入、删除元素的时间复杂度为 O(log n)。")]),a._v(" "),r("h2",{attrs:{id:"_40-hashmap-在多线程环境中什么时候会出现问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_40-hashmap-在多线程环境中什么时候会出现问题"}},[a._v("#")]),a._v(" 40. HashMap 在多线程环境中什么时候会出现问题？")]),a._v(" "),r("p",[a._v("Java 1.7 中，HashMap 在多线程环境下，添加一个元素时因哈希冲突而采取头插法将添加元素插入到某个哈希桶上的链表中时，正好进行扩容操作，某个哈希桶中的全部元素移动到新的哈希桶中，在新的哈希桶中的链表节点上形成环形的指向关系，这时如果有 get 请求，就会出现死循环线程导致 CPU 使用率达到100%。")]),a._v(" "),r("h2",{attrs:{id:"_41-concurrenthashmap-的-底层存储结构是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_41-concurrenthashmap-的-底层存储结构是什么"}},[a._v("#")]),a._v(" 41. ConcurrentHashMap 的 底层存储结构是什么？")]),a._v(" "),r("p",[a._v("ConcurrentHashMap 底层存储结构是：数组 + 链表。")]),a._v(" "),r("h2",{attrs:{id:"_42-concurrenthashmap-是怎么保证并发安全的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_42-concurrenthashmap-是怎么保证并发安全的"}},[a._v("#")]),a._v(" 42. ConcurrentHashMap 是怎么保证并发安全的？")]),a._v(" "),r("p",[a._v("添加元素时，计算元素所在的桶，如果桶未初始化或者桶个数为 0，则初始化桶；否则进入一个循环，如果要插入的元素所在的桶还没有元素，则使用 CAS 把这个元素插入到这个桶中，如果使用 CAS 插入元素时，发现已经有元素了，则进入下一次循环，下一次循环插入该桶上的链表或者红黑树中，如果使用 CAS 插入元素成功，则推出循环；如果要插入的元素所在的桶的第一个元素的 hash 是 MOVED，则当前线程帮忙一起迁移元素；如果这个桶不为空且不在迁移元素，则用 synchronized 锁住这个桶，并查找要查询的元素是否在这个桶中，如果存在，则替换值，否则，插入链表结尾或者红黑树中。")]),a._v(" "),r("p",[a._v("删除元素跟添加元素一样，都是先找到元素所在的桶，然后采用分段锁的思想锁住整个桶，再进行操作。")]),a._v(" "),r("p",[a._v("元素节点Node 的 val 和 next 属性用 volatile 修饰，保证可见性。")]),a._v(" "),r("h2",{attrs:{id:"_43-concurrenthashmap-是怎么扩容的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_43-concurrenthashmap-是怎么扩容的"}},[a._v("#")]),a._v(" 43. ConcurrentHashMap 是怎么扩容的？")]),a._v(" "),r("ol",[r("li",[a._v("新桶数组大小是旧数组的两倍；")]),a._v(" "),r("li",[a._v("迁移元素先从靠后的桶开始；")]),a._v(" "),r("li",[a._v("迁移完成的桶在里面放置 ForwardingNode 的元素，标记该桶迁移完成；")]),a._v(" "),r("li",[a._v("迁移过程中根据 hash & n 是否等于0把桶中元素分化成两个链表或树；")]),a._v(" "),r("li",[a._v("低位链表(树)存储在原来的位置；")]),a._v(" "),r("li",[a._v("高位链表(树)存储在原来的位置加n的位置；")]),a._v(" "),r("li",[a._v("迁移元素时会锁住当前桶，也就是分段锁的思想。")])]),a._v(" "),r("h2",{attrs:{id:"_44-concurrenthashmap-的-size-方法是怎么实现的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_44-concurrenthashmap-的-size-方法是怎么实现的"}},[a._v("#")]),a._v(" 44. ConcurrentHashMap 的 size() 方法是怎么实现的？")]),a._v(" "),r("ol",[r("li",[a._v("元素个数的存储方式类似于 LongAddr 类，存储在不同的段上，减少不同线程同时更新 size 时的冲突")]),a._v(" "),r("li",[a._v("添加元素时先尝试把数量加到 baseCount 上，如果失败再加到分段的 CounterCell 上")]),a._v(" "),r("li",[a._v("计算元素个数时把这些段的值及 baseCount 相加计算出总的元素个数。")])]),a._v(" "),r("h2",{attrs:{id:"_45-concurrenthashmap-是强一致性的吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_45-concurrenthashmap-是强一致性的吗"}},[a._v("#")]),a._v(" 45. ConcurrentHashMap 是强一致性的吗？")]),a._v(" "),r("p",[a._v("ConcurrentHashMap 是强一致的。")]),a._v(" "),r("h2",{attrs:{id:"_46-concurrenthashmap-哪些地方运用到了分段锁的思想"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_46-concurrenthashmap-哪些地方运用到了分段锁的思想"}},[a._v("#")]),a._v(" 46. ConcurrentHashMap 哪些地方运用到了分段锁的思想？")]),a._v(" "),r("ol",[r("li",[a._v("添加、删除元素时运用了分段锁的思想，只锁住要操作元素所在的那个数据桶。")]),a._v(" "),r("li",[a._v("更新元素个数时运用了分段锁的思想。元素个数的存储方式类似于 LongAddr 类，存储在不同的段上，减少不同线程同时更新 size 时的冲突。添加元素时先尝试把数量加到 baseCount 上，如果失败再加到分段的 CounterCell 上。计算元素个数时把这些段的值及 baseCount 相加计算出总的元素个数。")])]),a._v(" "),r("h2",{attrs:{id:"_47-什么是伪共享-怎么避免伪共享"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_47-什么是伪共享-怎么避免伪共享"}},[a._v("#")]),a._v(" 47. 什么是伪共享？怎么避免伪共享？")]),a._v(" "),r("p",[a._v("CPU 的读写速度快，内存的读写速度比 CPU 要慢得多，如果每次读写数据都直接操作内存需要等待一定的时钟周期，效率是很低的。所以，在 CPU 和内存之间增加了高速缓存，利用时间局部性原理和空间局部性原理，缓存最近可能会被访问的一片连续区域的数据，当 CPU 再次访问该部分数据时可以从高速缓存中直接调用，减少了 CPU 的等待时间，提高了数据的读写速率。")]),a._v(" "),r("p",[a._v("CPU 高速缓存以缓存行为单位存取数据，一个缓存行 64 字节。如果多个核的线程在操作同一个缓存行中的不同变量数据，那么就会出现频繁的缓存失效，即使在代码层面看这两个线程操作的数据之间完全没有关系。这种不合理的资源竞争情况就是伪共享。")]),a._v(" "),r("p",[a._v("避免伪共享有以下两个方法：")]),a._v(" "),r("ol",[r("li",[a._v("缓存行填充：将要保护的变量前后填充一些变量，使得不相关的变量不要分配到同一个缓存行中。")]),a._v(" "),r("li",[a._v("JVM配置增加参数 -XX:RestrictContented，在需要保护的变量上使用 @sun.misc.Contented 注解")])]),a._v(" "),r("h2",{attrs:{id:"_48-什么是跳表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_48-什么是跳表"}},[a._v("#")]),a._v(" 48. 什么是跳表？")]),a._v(" "),r("p",[a._v("跳表是一个随机化的数据结构，实质上就是一种可以进行"),r("strong",[a._v("二分")]),a._v("查找的"),r("strong",[a._v("有序链表")]),a._v("。\n跳表在原有的有序链表上面增加了多级索引，通过索引来实现快速查找。\n跳表不仅能提高搜索性能，同时也可以提高插入和删除操作的性能。")]),a._v(" "),r("h2",{attrs:{id:"_49-concurrentskiplist-是有序的吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_49-concurrentskiplist-是有序的吗"}},[a._v("#")]),a._v(" 49. ConcurrentSkipList 是有序的吗？")]),a._v(" "),r("p",[a._v("ConcurrentSkipList 是有序的。")]),a._v(" "),r("h2",{attrs:{id:"_50-concurrentskiplist-是如何保证线程安全的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_50-concurrentskiplist-是如何保证线程安全的"}},[a._v("#")]),a._v(" 50. ConcurrentSkipList 是如何保证线程安全的？")]),a._v(" "),r("p",[a._v("通过 CAS + 自旋的方式保证线程安全。添加元素时，先找到目标节点的位置然后插入目标节点到链表中；然后随机决定是否需要建立索引及其层次，如果需要则建立自上而下的索引；最后将新建的索引节点与其他索引节点通过右指针链接在一起。每一步都通过 CAS + 自旋的方式保证操作一定能成功。")]),a._v(" "),r("h2",{attrs:{id:"_51-concurrentskiplist-插入、删除、查询元素的时间复杂度各是多少"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_51-concurrentskiplist-插入、删除、查询元素的时间复杂度各是多少"}},[a._v("#")]),a._v(" 51. ConcurrentSkipList 插入、删除、查询元素的时间复杂度各是多少？")]),a._v(" "),r("p",[a._v("ConcurrentSkipList 插入元素的平均时间复杂度是 O(log n)。")]),a._v(" "),r("p",[a._v("ConcurrentSkipList 删除元素的平均时间复杂度是 O(log n)。")]),a._v(" "),r("p",[a._v("ConcurrentSkipList 查询元素的平均时间复杂度是 O(log n)。")]),a._v(" "),r("h2",{attrs:{id:"_52-concurrentskiplist-的索引具有什么特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_52-concurrentskiplist-的索引具有什么特性"}},[a._v("#")]),a._v(" 52. ConcurrentSkipList 的索引具有什么特性？")]),a._v(" "),r("p",[a._v("跳表在原有的有序链表上面增加了多级索引，通过索引来实现快速查找。")]),a._v(" "),r("p",[a._v("Node 数据节点，存储数据的节点，典型的单链表结构")]),a._v(" "),r("p",[a._v("Index 索引节点，存储相应的 node 值，以及向下和向右的索引指针")]),a._v(" "),r("p",[a._v("HeadIndex 头索引节点，继承自 Index，并扩展一个 level 字段，用于记录索引的层级。")]),a._v(" "),r("h2",{attrs:{id:"_53-为什么redis-选择跳表而不是红黑树来实现有序集合"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_53-为什么redis-选择跳表而不是红黑树来实现有序集合"}},[a._v("#")]),a._v(" 53. 为什么Redis 选择跳表而不是红黑树来实现有序集合？")]),a._v(" "),r("p",[a._v("首先，我们来分析下 Redis 的有序集合支持的操作：")]),a._v(" "),r("ol",[r("li",[a._v("插入元素")]),a._v(" "),r("li",[a._v("删除元素")]),a._v(" "),r("li",[a._v("查找元素")]),a._v(" "),r("li",[a._v("有序输出所有元素")]),a._v(" "),r("li",[a._v("查找区间内所有元素")])]),a._v(" "),r("p",[a._v("其中，前4项红黑树都可以完成，且时间复杂度与跳表一致。但是要查找区间的元素，红黑树的效率就没有跳表高了。")]),a._v(" "),r("p",[a._v("在跳表中，要查找区间的元素，我们只要定位到两个区间端点在最低层级的位置，然后按顺序遍历元素就可以了，非常高效。")]),a._v(" "),r("p",[a._v("而红黑树只能定位到端点后，再从首位置开始每次都要查找后继节点，相对来说是比较耗时的。")]),a._v(" "),r("p",[a._v("此外，跳表实现起来很容易，红黑树实现起来相对困难，所以 Redis 选择使用跳表来实现有序集合。")]),a._v(" "),r("ol",{attrs:{start:"54"}},[r("li",[a._v("Set⾥的元素是不能重复的，那么⽤什么⽅法来区分重复与否呢? 是⽤ == 还是 equals() ? 它们有何区别?")])]),a._v(" "),r("p",[a._v("比较两个对象是否相等，先比较两个对象的 hashCode，如果两个对象的 hashCode 相等，再使用 equals() 方法来检查是否真的相等，当两个的对象的 hashCode 和 equals() 方法都返回 true，则两个对象是相等的。否则，两个对象不是相等的。")]),a._v(" "),r("p",[a._v("== 用于比较栈中的内容是否相同，如果是原始数据类型，比较的是值，如果是引用，比较的是该引用指向的对象在堆中的位置是否相同。")]),a._v(" "),r("p",[a._v("equals() 方法用于判断两个对象是否相等。")])])}),[],!1,null,null,null);t.default=e.exports}}]);