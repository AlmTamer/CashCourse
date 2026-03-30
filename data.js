const CHAPTERS = [
    {
        num: "01",
        title: "Understanding Money",
        icon: "💰",
        meta: "7 lessons · ~35 min",
        lessons: [
            { title: "What Is Money?", type: "video", desc: "Introduction to money and its role in society" },
            { title: "How Banks Work", type: "video", desc: "The banking system explained" },
            { title: "The History of Money", type: "article", desc: "From barter to digital currency" },
            { title: "Inflation Explained", type: "video", desc: "How inflation affects your buying power" },
            { title: "Money Basics Game", type: "interactive", desc: "Interactive learning tool" },
            { title: "Income vs. Wealth", type: "article", desc: "Key difference explained" },
            { title: "Money Fundamentals Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "02",
        title: "Budgeting & Spending",
        icon: "📊",
        meta: "7 lessons · ~38 min",
        lessons: [
            { title: "Why Budgeting Matters", type: "video", desc: "Foundation of financial health" },
            { title: "Create Your First Budget", type: "video", desc: "Step-by-step budgeting guide" },
            { title: "Fixed vs. Variable Expenses", type: "article", desc: "Understanding your costs" },
            { title: "The 50/30/20 Rule", type: "video", desc: "The budgeting framework" },
            { title: "Budget Builder Tool", type: "interactive", desc: "Interactive budgeting tool" },
            { title: "Avoiding Lifestyle Inflation", type: "article", desc: "Keep spending in check" },
            { title: "Budgeting Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "03",
        title: "Saving & Emergency Funds",
        icon: "🏦",
        meta: "7 lessons · ~36 min",
        lessons: [
            { title: "Why Saving Matters", type: "video", desc: "Building financial security" },
            { title: "Emergency Funds Explained", type: "video", desc: "The financial safety net" },
            { title: "Short vs. Long-Term Savings", type: "article", desc: "Different savings goals" },
            { title: "High-Yield Savings Accounts", type: "video", desc: "Maximize your savings" },
            { title: "Emergency Fund Calculator", type: "interactive", desc: "Calculate your fund needs" },
            { title: "Automating Your Savings", type: "article", desc: "Make saving effortless" },
            { title: "Savings Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "04",
        title: "Credit & Debt",
        icon: "💳",
        meta: "7 lessons · ~40 min",
        lessons: [
            { title: "What Is Credit?", type: "video", desc: "Understanding credit fundamentals" },
            { title: "Credit Scores Explained", type: "video", desc: "How credit scores work" },
            { title: "Credit Cards Explained", type: "article", desc: "Benefits and risks" },
            { title: "Interest and APR", type: "video", desc: "How debt grows" },
            { title: "Debt Calculator", type: "interactive", desc: "Understand your debt" },
            { title: "Good Debt vs. Bad Debt", type: "article", desc: "Smart borrowing" },
            { title: "Credit & Debt Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "05",
        title: "Investing Basics",
        icon: "📈",
        meta: "7 lessons · ~42 min",
        lessons: [
            { title: "What Is Investing?", type: "video", desc: "Building wealth over time" },
            { title: "Stocks vs. Bonds", type: "video", desc: "Comparing investment types" },
            { title: "Index Funds Explained", type: "article", desc: "Simple diversified investing" },
            { title: "Compound Interest", type: "video", desc: "The power of compounding" },
            { title: "Investment Growth Tool", type: "interactive", desc: "See your money grow" },
            { title: "Risk vs. Return", type: "article", desc: "Understanding investment risk" },
            { title: "Investing Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "06",
        title: "Taxes",
        icon: "🧾",
        meta: "7 lessons · ~38 min",
        lessons: [
            { title: "Why Taxes Exist", type: "video", desc: "The purpose of taxation" },
            { title: "How Income Taxes Work", type: "video", desc: "Tax system basics" },
            { title: "Tax Brackets Explained", type: "article", desc: "Progressive taxation" },
            { title: "Paychecks and Withholding", type: "video", desc: "Understanding your paycheck" },
            { title: "Tax Calculator", type: "interactive", desc: "Estimate your taxes" },
            { title: "Common Tax Mistakes", type: "article", desc: "Avoid these errors" },
            { title: "Taxes Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "07",
        title: "Real-Life Financial Decisions",
        icon: "🏠",
        meta: "7 lessons · ~45 min",
        lessons: [
            { title: "Major Financial Decisions", type: "video", desc: "How to decide wisely" },
            { title: "Renting vs. Buying", type: "video", desc: "Which is right for you?" },
            { title: "Buying a Car", type: "article", desc: "Smart car purchasing" },
            { title: "Insurance Explained", type: "video", desc: "Protecting yourself" },
            { title: "Rent vs. Buy Calculator", type: "interactive", desc: "Compare your options" },
            { title: "Salary Negotiation", type: "article", desc: "Get paid what you're worth" },
            { title: "Decisions Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "08",
        title: "Building Wealth",
        icon: "🌱",
        meta: "7 lessons · ~40 min",
        lessons: [
            { title: "What Is Net Worth?", type: "video", desc: "Your financial snapshot" },
            { title: "Assets vs. Liabilities", type: "video", desc: "Building wealth" },
            { title: "How Wealth Builds", type: "article", desc: "Long-term growth" },
            { title: "Retirement Accounts", type: "video", desc: "Planning for retirement" },
            { title: "Net Worth Calculator", type: "interactive", desc: "Track your wealth" },
            { title: "Financial Independence", type: "article", desc: "The FIRE movement" },
            { title: "Wealth Building Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "09",
        title: "Financial Psychology",
        icon: "🧠",
        meta: "7 lessons · ~35 min",
        lessons: [
            { title: "Why People Overspend", type: "video", desc: "Psychology of spending" },
            { title: "Consumer Psychology", type: "video", desc: "Marketing manipulation" },
            { title: "Marketing and Spending", type: "article", desc: "How ads influence you" },
            { title: "Delayed Gratification", type: "video", desc: "The power of patience" },
            { title: "Spending Tracker", type: "interactive", desc: "Understand your habits" },
            { title: "Building Good Habits", type: "article", desc: "Lasting change" },
            { title: "Psychology Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    }
];

const LESSON_CONTENT = {
    "0-0": {
        type: "video",
        html: `<div class="article-content">
            <h2>What Is Money?</h2>
            <p>Money is one of humanity's greatest inventions. It's a medium of exchange that allows us to trade value easily, save for the future, and measure the cost of things. But money hasn't always existed—and understanding how it works today is essential for managing your finances.</p>
            <h3>A Brief History</h3>
            <p>Before money, people bartered—trading goods directly. If you had chickens and wanted wheat, you'd find someone with wheat who wanted chickens. This worked in small communities but became complicated as societies grew.</p>
            <p>Money solved this problem. It provided a standardized medium of exchange that everyone agreed had value.</p>
            <h3>What Makes Money Valuable?</h3>
            <p>Money has value because people agree it does. Today, most money is <strong>fiat currency</strong>—it's valuable because governments declare it to be. This works because society trusts the system.</p>
            <div class="article-callout">💡 <strong>Key Insight:</strong> Money is fundamentally about trust. When that trust breaks down, money loses its value.</div>
            <h3>Three Functions of Money</h3>
            <ol>
                <li><strong>Medium of Exchange:</strong> You trade money for goods instead of bartering</li>
                <li><strong>Store of Value:</strong> Money keeps its worth over time so you can save</li>
                <li><strong>Unit of Account:</strong> Money measures the price of things consistently</li>
            </ol>
            <p>Understanding these functions helps you see why financial literacy matters—you're literally dealing with one of civilization's most important tools every single day.</p>
        </div>`
    },
    "0-2": {
        type: "article",
        html: `<div class="article-content">
            <h2>The History of Money</h2>
            <p>Money didn't appear overnight. Humans created it to solve real problems. Understanding its evolution helps you appreciate how financial systems work today.</p>
            <h3>Phase 1: Commodity Money (3000 BCE - 1600s)</h3>
            <p>Before standardized money, people used valuable commodities as payment:</p>
            <ul>
                <li>Shells, beads, and stones in Africa</li>
                <li>Cattle and livestock in many cultures</li>
                <li>Salt (so valuable it was called "white gold")</li>
                <li>Spices, tea, and precious metals</li>
            </ul>
            <p><strong>Problem:</strong> Commodities were hard to transport, divide, and store. A cow is worth a lot but you can't split it easily.</p>
            <h3>Phase 2: Metal Coins (600 BCE - Present)</h3>
            <p>Around 600 BCE, Lydia (modern-day Turkey) minted the first coins. This was revolutionary because:</p>
            <ul>
                <li>Metal had intrinsic value (gold, silver)</li>
                <li>Coins were standardized in weight and purity</li>
                <li>They were durable and portable</li>
                <li>Government stamps guaranteed authenticity</li>
            </ul>
            <p>Coins enabled long-distance trade and more complex economies.</p>
            <h3>Phase 3: Paper Money (700 CE - Present)</h3>
            <p>China invented paper money around 700 CE when merchants created receipts for coin deposits. Eventually, the Chinese government issued paper money backed by coins.</p>
            <p><strong>Key Innovation:</strong> Money could now be <strong>fiat</strong>—valuable because the government said so, not because of intrinsic value.</p>
            <div class="article-callout">💡 <strong>Why This Matters:</strong> This shift shows that money is ultimately about trust in institutions. Modern currency is 100% fiat.</div>
            <h3>Phase 4: Modern Money (1800s - Present)</h3>
            <p>Today, money exists in multiple forms:</p>
            <ul>
                <li>Physical cash (coins and bills)</li>
                <li>Bank deposits and checking accounts</li>
                <li>Credit and debit cards</li>
                <li>Digital wallets and payment apps</li>
                <li>Cryptocurrencies (Bitcoin, Ethereum)</li>
                <li>Bank reserves and electronic transfers</li>
            </ul>
            <h3>The Gold Standard (and Why It Ended)</h3>
            <p>From 1944-1971, the U.S. backed dollars with gold—you could literally exchange paper money for gold at a bank. This provided confidence in the currency.</p>
            <p>But as the economy grew, there wasn't enough gold to back all the currency in circulation. In 1971, the U.S. abandoned the gold standard. The dollar became purely fiat.</p>
            <p><strong>Result:</strong> The world adopted floating exchange rates between currencies, enabling modern global finance.</p>
            <h3>Lessons for Your Financial Life</h3>
            <p>Understanding money's history teaches you:</p>
            <ol>
                <li><strong>Money is a tool:</strong> It solves problems but has no inherent value beyond agreement</li>
                <li><strong>Trust matters:</strong> Inflation happens when people lose faith in a currency</li>
                <li><strong>Systems change:</strong> The way money works keeps evolving (blockchain, digital currencies)</li>
                <li><strong>You need to stay informed:</strong> Money literacy is more important than ever as systems evolve</li>
            </ol>
            <p>The bottom line: Money is human innovation. When you understand its history, you understand why managing it well is so important.</p>
        </div>`
    }
};
