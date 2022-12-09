import React, { useState } from 'react'

function ResearchCart() {
    const [cards] = useState([
        {
            title: 'BlockFlex: Enabling Storage Harvesting with Software-Defined Flash in Modern Cloud Platforms',
            dec: 'Cloud platforms today make efficient use of storage resources by slicing them among multi-tenant applications on demand. However, our study discloses that the cloud storage i                                                                           ',
            link: 'https://www.usenix.org/conference/osdi22/presentation/reidys'
        },
        {
            title: 'Understanding and Detecting Deep Memory Persistency Bugs in NVM Programs with DeepMC',
            dec: 'Benjamin Reidys, Jian Huang Proceedings of the 27th ACM SIGPLAN Annual Symposium on Principles and Practice of Parallel Programming (PPoPP"22)',
            link: 'https://dl.acm.org/doi/abs/10.1145/3503221.3508427?casa_token=jk1MSxHq0XcAAAAA:pLFbvzZAenBSE2qTZ2Ju9JKfPTHhrSja7qbNXQ3SK3ddDYc5uYIIeY7xYJZx5BLqaplDyir71aa5EQ'
        },
        {
            title: 'IceClave: A Trusted Execution Environment for In-Storage Computing',
            dec: 'Luyi Kang*, Yuqi Xue*, Weiwei Jia*, X. Wang, Jongryool Kim, Changhwan Youn, Myeong Joon Kang, Jin Lim, Bruce Jacob, Jian Huang Proceedings of the 54th Annual IEEE/ACM International Symposium on ',
            link: 'https://dl.acm.org/doi/abs/10.1145/3466752.3480109'
        },
        {
            title: 'Distributed Data Persistency',
            dec: 'Miao Cai, Chance C. Coats, Jeonghyun Woo, Jian Huang 12th Annual Non-Volatile Memories Workshop (NVMW"21) However, it requires atomic data durability to ensure memory.Benjamin Reidys, Peng Liu, Jian Huang Proceedings Byte-addressable non-volatile memory (NVM) ',
            link: 'https://ieeexplore.ieee.org/abstract/document/9138965'
        },
        {
            title: 'HOOP: Efficient Hardware-Assisted Out-of-Place Update for Non-Volatile Memory',
            dec: 'Byte-addressable non-volatile memory (NVM) is a promising technology that provides near-DRAM performance with scalable memory capacity. However, it requires atomic data durability to ensure memory  ',
            link: 'https://ieeexplore.ieee.org/abstract/document/9138965'
        },
        {
            title: 'RSSD: Defend Against Ransomware with Hardware-Isolated Network-Storage Codesign and Post-Attack Analysis',
            dec: 'c of the 27th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS"22) Byte-addressable non-volatile memory (NVM)',
            link: 'https://csl.illinois.edu/news/46489'
        },
    ])
    return (
        <div>
            <section>
                <div className="container">
                    <h1>All Researchs</h1>
                    <div className="cards">
                        {
                            cards.map((card, i) => (
                                <div key={i} className="card">
                                    <h3><b>{card.title}</b>
                                    </h3>
                                    <p>
                                        {card.dec}
                                    </p>
                                    <button className='btn'>
                                        <a href={card.link}>Explore</a>
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ResearchCart