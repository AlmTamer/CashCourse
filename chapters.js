const CHAPTERS = [
    {
        num: "01",
        title: "Understanding Money",
        icon: "💰",
        meta: "7 lessons · ~35 min · Beginner",
        lessons: [
            { title: "What Is Money?", type: "video", desc: "Introduction to money" },
            { title: "How Banks Work", type: "video", desc: "The banking system" },
            { title: "The History of Money", type: "article", desc: "From barter to digital" },
            { title: "Inflation Explained", type: "video", desc: "Impact on buying power" },
            { title: "Money Basics Game", type: "interactive", desc: "Learn through play" },
            { title: "Income vs. Wealth", type: "article", desc: "Key differences" },
            { title: "Fundamentals Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "02",
        title: "Budgeting & Spending",
        icon: "📊",
        meta: "7 lessons · ~38 min · Beginner",
        lessons: [
            { title: "Why Budgeting Matters", type: "video", desc: "Financial foundation" },
            { title: "Create Your First Budget", type: "video", desc: "Step-by-step guide" },
            { title: "Fixed vs. Variable Expenses", type: "article", desc: "Understand costs" },
            { title: "The 50/30/20 Rule", type: "video", desc: "Budgeting framework" },
            { title: "Budget Builder", type: "interactive", desc: "Create your budget" },
            { title: "Lifestyle Inflation", type: "article", desc: "Avoid spending creep" },
            { title: "Budgeting Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "03",
        title: "Saving & Emergency Funds",
        icon: "🏦",
        meta: "7 lessons · ~36 min · Beginner",
        lessons: [
            { title: "Why Saving Matters", type: "video", desc: "Building security" },
            { title: "Emergency Funds", type: "video", desc: "The safety net" },
            { title: "Short vs. Long-Term", type: "article", desc: "Different goals" },
            { title: "High-Yield Accounts", type: "video", desc: "Maximize returns" },
            { title: "Fund Calculator", type: "interactive", desc: "Calculate your needs" },
            { title: "Automating Savings", type: "article", desc: "Make it effortless" },
            { title: "Savings Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "04",
        title: "Credit & Debt",
        icon: "💳",
        meta: "7 lessons · ~40 min · Intermediate",
        lessons: [
            { title: "What Is Credit?", type: "video", desc: "Credit fundamentals" },
            { title: "Credit Scores", type: "video", desc: "How scores work" },
            { title: "Credit Cards", type: "article", desc: "Benefits and risks" },
            { title: "Interest and APR", type: "video", desc: "How debt grows" },
            { title: "Debt Calculator", type: "interactive", desc: "Understand debt" },
            { title: "Good vs. Bad Debt", type: "article", desc: "Smart borrowing" },
            { title: "Credit Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "05",
        title: "Investing Basics",
        icon: "📈",
        meta: "7 lessons · ~42 min · Intermediate",
        lessons: [
            { title: "What Is Investing?", type: "video", desc: "Wealth building" },
            { title: "Stocks vs. Bonds", type: "video", desc: "Investment types" },
            { title: "Index Funds", type: "article", desc: "Diversified investing" },
            { title: "Compound Interest", type: "video", desc: "Power of time" },
            { title: "Growth Calculator", type: "interactive", desc: "Watch it grow" },
            { title: "Risk vs. Return", type: "article", desc: "Investment risk" },
            { title: "Investing Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "06",
        title: "Taxes",
        icon: "🧾",
        meta: "7 lessons · ~38 min · Intermediate",
        lessons: [
            { title: "Why Taxes Exist", type: "video", desc: "Tax purpose" },
            { title: "How Taxes Work", type: "video", desc: "Tax system basics" },
            { title: "Tax Brackets", type: "article", desc: "Progressive taxation" },
            { title: "Paychecks & Withholding", type: "video", desc: "Your paycheck" },
            { title: "Tax Calculator", type: "interactive", desc: "Estimate taxes" },
            { title: "Tax Mistakes", type: "article", desc: "Common errors" },
            { title: "Taxes Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "07",
        title: "Real-Life Decisions",
        icon: "🏠",
        meta: "7 lessons · ~45 min · Intermediate",
        lessons: [
            { title: "Major Decisions", type: "video", desc: "Decision framework" },
            { title: "Renting vs. Buying", type: "video", desc: "Best choice?" },
            { title: "Buying a Car", type: "article", desc: "Smart purchasing" },
            { title: "Insurance", type: "video", desc: "Protecting yourself" },
            { title: "Rent vs. Buy Tool", type: "interactive", desc: "Compare options" },
            { title: "Salary Negotiation", type: "article", desc: "Get paid fairly" },
            { title: "Decisions Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "08",
        title: "Building Wealth",
        icon: "🌱",
        meta: "7 lessons · ~40 min · Advanced",
        lessons: [
            { title: "What Is Net Worth?", type: "video", desc: "Your snapshot" },
            { title: "Assets vs. Liabilities", type: "video", desc: "Building wealth" },
            { title: "How Wealth Builds", type: "article", desc: "Long-term growth" },
            { title: "Retirement Accounts", type: "video", desc: "Plan retirement" },
            { title: "Net Worth Tracker", type: "interactive", desc: "Track wealth" },
            { title: "Financial Independence", type: "article", desc: "FIRE movement" },
            { title: "Wealth Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    },
    {
        num: "09",
        title: "Financial Psychology",
        icon: "🧠",
        meta: "7 lessons · ~35 min · All Levels",
        lessons: [
            { title: "Why People Overspend", type: "video", desc: "Psychology" },
            { title: "Consumer Psychology", type: "video", desc: "Marketing tactics" },
            { title: "Marketing & Spending", type: "article", desc: "Advertising impact" },
            { title: "Delayed Gratification", type: "video", desc: "Power of patience" },
            { title: "Habit Tracker", type: "interactive", desc: "Understand habits" },
            { title: "Building Good Habits", type: "article", desc: "Lasting change" },
            { title: "Psychology Quiz", type: "quiz", desc: "Test your knowledge" }
        ]
    }
];

const LESSON_CONTENT = {
    "0-0": {
        html: `<div class="article-content">
            <h2>What Is Money?</h2>
            <p>Money is one of humanity's greatest inventions—a tool that enables trade, allows us to save, and measures value. But have you ever wondered what makes money actually valuable?</p>
            <h3>The Three Functions of Money</h3>
            <p><strong>1. Medium of Exchange:</strong> Money allows you to trade for goods without bartering. Instead of trading chickens for wheat, you trade chickens for money, then money for wheat.</p>
            <p><strong>2. Store of Value:</strong> Money keeps its worth over time. You can earn it today and spend it next month. This isn't true for perishable goods.</p>
            <p><strong>3. Unit of Account:</strong> Money provides a standard measure of price. Everything is priced in the same unit, making it easy to compare value.</p>
            <div class="article-callout">💡 <strong>Key Insight:</strong> Money works because society agrees it has value. When that trust breaks down, money loses its worth.</div>
            <h3>What Gives Money Value?</h3>
            <p>Money has value because:</p>
            <ul>
                <li>People accept it as payment</li>
                <li>Governments declare it legal tender</li>
                <li>Society collectively trusts it</li>
                <li>It's relatively scarce</li>
            </ul>
            <p>Today's money is mostly <strong>fiat currency</strong>—it has no intrinsic value like gold. Its value comes purely from government authority and social agreement.</p>
            <h3>Why This Matters</h3>
            <p>Understanding money's nature helps you respect it as a tool and manage it wisely. Money isn't the goal—it's how you achieve your goals. Building financial literacy starts with understanding what money actually is.</p>
        </div>`
    },
    "0-2": {
        html: `<div class="article-content">
            <h2>The History of Money: Understanding Where It Came From</h2>
            <p>Money hasn't always existed in its current form. Understanding its evolution reveals why financial systems work the way they do today.</p>
            <h3>Before Money: The Barter Era</h3>
            <p>In ancient times, people exchanged goods directly. If you had apples and wanted fish, you'd find a fisherman who wanted apples. This worked in small communities but had major problems:</p>
            <ul>
                <li>Finding someone who has what you want AND wants what you have is difficult</li>
                <li>How do you trade one cow for ten chickens?</li>
                <li>How do you store value long-term?</li>
                <li>How do you compare prices fairly?</li>
            </ul>
            <h3>Commodity Money (3000 BCE - 1600s CE)</h3>
            <p>Societies solved barter problems by choosing valuable commodities as money:</p>
            <ul>
                <li>Shells, beads, and stones in Africa</li>
                <li>Cattle and livestock in ancient societies</li>
                <li>Salt (worth its weight in silver)</li>
                <li>Tea and spices in Asia</li>
            </ul>
            <p><strong>Advantages:</strong> These items had real value and were accepted widely.</p>
            <p><strong>Disadvantages:</strong> Hard to transport, impossible to divide (can't split a cow), decay and spoilage, no standard value.</p>
            <h3>Metal Coins (600 BCE - Present)</h3>
            <p>Around 600 BCE, Lydia (modern Turkey) revolutionized money with metal coins. This was genius because:</p>
            <ul>
                <li>Metal (gold, silver) had consistent value</li>
                <li>Coins could be standardized in size and weight</li>
                <li>Government stamps guaranteed authenticity</li>
                <li>Easy to divide and transport</li>
                <li>Durable and didn't spoil</li>
            </ul>
            <p>Coins enabled long-distance trade and more complex economies. Empires rose and fell partly based on their monetary systems.</p>
            <div class="article-callout">💡 Fun Fact: The word "salary" comes from "salarium," the amount of salt Roman soldiers were paid with.</div>
            <h3>Paper Money (700 CE - Present)</h3>
            <p>China invented paper money around 700 CE when merchants created receipts for coin deposits at banks. People realized they could trade the receipts instead of carrying heavy coins.</p>
            <p>Eventually, governments issued paper currency, promising it could be exchanged for gold or silver. This was called <strong>representative money</strong>.</p>
            <p><strong>Revolutionary aspect:</strong> Money could now be worthless material (paper) but valuable through government backing.</p>
            <h3>Fiat Currency (1944 - Present)</h3>
            <p>In 1944, the Bretton Woods Conference tied all major currencies to the U.S. dollar, which was backed by gold. But as economies grew, there wasn't enough gold to back all the money.</p>
            <p>In 1971, President Nixon ended the gold standard. The dollar became <strong>fiat currency</strong>—valuable only because the government declared it so and society agreed.</p>
            <p><strong>Impact:</strong> All modern currencies became fiat. Money now relies entirely on trust in institutions.</p>
            <h3>Modern Money Forms (1980s - Present)</h3>
            <p>Today, money exists in multiple forms:</p>
            <ul>
                <li>Physical cash (coins and bills)</li>
                <li>Bank deposits and checking accounts</li>
                <li>Credit and debit cards</li>
                <li>Digital wallets and payment apps</li>
                <li>Cryptocurrencies (Bitcoin, Ethereum)</li>
            </ul>
            <p>The trend is clear: money is becoming increasingly digital and abstract.</p>
            <h3>Lessons for Your Financial Life</h3>
            <ol>
                <li><strong>Money is a human invention:</strong> It's a tool, not wealth itself</li>
                <li><strong>Trust is everything:</strong> Money only works if people believe in it</li>
                <li><strong>Systems evolve:</strong> How we use money keeps changing (blockchain, digital currencies)</li>
                <li><strong>Inflation happens:</strong> When governments print too much money, inflation rises</li>
                <li><strong>Stay informed:</strong> As money evolves, financial literacy becomes more important</li>
            </ol>
            <p>The bottom line: Money has solved real problems throughout history. Understanding its nature helps you manage it wisely and recognize when systems are changing.</p>
        </div>`
    },
    "1-0": {
        html: `<div class="article-content">
            <h2>Why Budgeting Matters: The Foundation of Financial Health</h2>
            <p>If money is a tool, then a budget is the instruction manual. It's how you take control of your finances instead of letting your finances control you.</p>
            <h3>What Is a Budget?</h3>
            <p>A budget is a plan for how you'll spend your money. It answers three questions:</p>
            <ol>
                <li>How much money is coming in?</li>
                <li>Where is it going?</li>
                <li>Is there anything left over?</li>
            </ol>
            <h3>Why Budgeting Works</h3>
            <p>Studies show that people who budget save 20% more than those who don't. Why? Because budgeting creates awareness.</p>
            <p>When you write down where your money goes, you'll likely discover:</p>
            <ul>
                <li>Subscriptions you forgot about</li>
                <li>Unnecessary spending patterns</li>
                <li>Where you can cut back</li>
                <li>How much you can actually save</li>
            </ul>
            <div class="article-callout">💡 <strong>Reality Check:</strong> Most people spend 30% more than they realize. A budget shows you the truth.</div>
            <h3>The Psychological Power</h3>
            <p>Budgeting gives you control. Instead of money controlling you (stress, debt, financial anxiety), you control your money. This creates psychological benefits:</p>
            <ul>
                <li>Reduced financial stress</li>
                <li>Better sleep</li>
                <li>More confidence</li>
                <li>Ability to plan for the future</li>
            </ul>
            <h3>Building Wealth Requires a Budget</h3>
            <p>Every wealthy person uses some form of budgeting. They know that:</p>
            <ul>
                <li>You can't manage what you don't measure</li>
                <li>Small savings accumulate to large wealth</li>
                <li>Intentional spending beats accidental spending</li>
            </ul>
            <h3>Getting Started</h3>
            <p>You don't need complex spreadsheets. Start simple:</p>
            <ol>
                <li>Write down your monthly income</li>
                <li>List your expenses (utilities, food, entertainment, etc.)</li>
                <li>See if you have anything left</li>
                <li>Adjust to fit your priorities</li>
            </ol>
            <p>That's it. You now have a budget. The next step is using it.</p>
        </div>`
    },
    "2-0": {
        html: `<div class="article-content">
            <h2>Why Saving Matters: Building Financial Security</h2>
            <p>Saving is the foundation of financial security. It's how you handle emergencies, prepare for the future, and reduce financial stress.</p>
            <h3>The Power of Saving</h3>
            <p>Saving gives you options. When you have money saved:</p>
            <ul>
                <li>You can handle emergencies without debt</li>
                <li>You can take time to find the right job</li>
                <li>You can invest in your education</li>
                <li>You can say "no" to bad situations</li>
            </ul>
            <div class="article-callout">💡 <strong>Freedom Equation:</strong> Savings = Options = Freedom</div>
            <h3>The 50/30/20 Rule</h3>
            <p>Financial experts recommend a simple allocation:</p>
            <ul>
                <li><strong>50%:</strong> Needs (housing, food, utilities)</li>
                <li><strong>30%:</strong> Wants (entertainment, dining out)</li>
                <li><strong>20%:</strong> Savings and debt repayment</li>
            </ul>
            <p>This framework helps you save while still enjoying life.</p>
            <h3>Why Most People Don't Save</h3>
            <p>Common excuses:</p>
            <ul>
                <li>"I don't make enough money" (but millionaires also struggle if they don't budget)</li>
                <li>"I'll save next year" (tomorrow never comes)</li>
                <li>"I can't save and have fun" (the 50/30/20 rule proves otherwise)</li>
            </ul>
            <p>The real issue: Without a system, saving doesn't happen. You have to make it automatic.</p>
            <h3>The Compound Interest Effect</h3>
            <p>Even small savings grow. If you save $100/month at 5% interest:</p>
            <ul>
                <li>After 10 years: $15,500</li>
                <li>After 20 years: $36,800</li>
                <li>After 30 years: $74,400</li>
            </ul>
            <p>You only contributed $36,000 but you have $74,400. The extra $38,400 came from interest on your interest.</p>
            <h3>Getting Started</h3>
            <p>Start saving today, even if it's just $25/month. The habit matters more than the amount. Once you're comfortable, increase it gradually.</p>
        </div>`
    },
    "3-0": {
        html: `<div class="article-content">
            <h2>What Is Credit? The Foundation of Creditworthiness</h2>
            <p>Credit is one of the most powerful financial tools you have—but only if you understand how it works. Used well, credit builds wealth. Used poorly, it destroys it.</p>
            <h3>What Is Credit?</h3>
            <p>Credit is borrowing money with the agreement to pay it back. When you use credit:</p>
            <ul>
                <li>You receive money or goods now</li>
                <li>You promise to pay it back later</li>
                <li>Usually with interest (a cost for borrowing)</li>
            </ul>
            <h3>How Credit Works</h3>
            <p>A lender (bank, credit card company) trusts you to pay back. This trust depends on:</p>
            <ul>
                <li>Your history of paying debts</li>
                <li>Your income and job stability</li>
                <li>Your credit score</li>
            </ul>
            <p>If you have good credit, you get better rates. If you have poor credit, you pay more.</p>
            <div class="article-callout">💡 <strong>The Catch-22:</strong> You need credit to build credit, but you need good history to get credit. Start small and build it carefully.</div>
            <h3>Why Credit Matters</h3>
            <p>You need credit to:</p>
            <ul>
                <li>Buy a house (almost impossible without a mortgage)</li>
                <li>Buy a car (most people finance)</li>
                <li>Handle emergencies (credit card backup)</li>
                <li>Get better interest rates</li>
            </ul>
            <h3>The Danger of Credit</h3>
            <p>Credit is dangerous when you:</p>
            <ul>
                <li>Spend more than you can afford to pay back</li>
                <li>Use credit cards to fund a lifestyle you can't afford</li>
                <li>Miss payments (destroys your credit score)</li>
                <li>Only make minimum payments (you pay mostly interest)</li>
            </ul>
            <h3>The Truth About Interest</h3>
            <p>Interest is the cost of borrowing. A $5,000 credit card balance at 20% APR costs you $100/month in interest alone. If you only make minimum payments, you'll pay it off in 2-3 years and pay $6,000+—20% more than you borrowed.</p>
            <h3>Good Credit Habits</h3>
            <ol>
                <li>Only borrow what you can afford to repay</li>
                <li>Always pay on time (automate if possible)</li>
                <li>Keep credit card balances low</li>
                <li>Don't open unnecessary accounts</li>
                <li>Check your credit report for errors</li>
            </ol>
        </div>`
    },
    "4-0": {
        html: `<div class="article-content">
            <h2>What Is Investing? How Money Makes Money</h2>
            <p>Investing is how the wealthy build generational wealth. It's not complicated, and you don't need to be rich to start. Here's what you need to know.</p>
            <h3>The Basic Concept</h3>
            <p>Investing is putting money into assets that generate returns. Instead of your money sitting in a savings account earning nearly nothing, you invest it to make it work for you.</p>
            <h3>Why Invest?</h3>
            <p>Savings earn about 4-5% annually. The stock market historically returns 10% annually. That 5-6% difference seems small, but over 30 years it's HUGE:</p>
            <ul>
                <li>$10,000 at 4%: $32,000</li>
                <li>$10,000 at 10%: $174,000</li>
            </ul>
            <p>That $142,000 difference came from just 6% more returns.</p>
            <div class="article-callout">💡 <strong>Einstein's Quote:</strong> "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it."</div>
            <h3>Types of Investments</h3>
            <p><strong>Stocks:</strong> Ownership in companies. When the company does well, your stock value increases.</p>
            <p><strong>Bonds:</strong> Loans to companies or governments. You earn interest.</p>
            <p><strong>Index Funds:</strong> Baskets of stocks that track the market (low risk, good returns).</p>
            <p><strong>Real Estate:</strong> Property that appreciates and generates rental income.</p>
            <h3>Risk vs. Reward</h3>
            <p>Higher returns come with higher risk. The stock market is riskier than bonds, but historically returns more. A smart strategy combines different types of investments.</p>
            <h3>Time Is Your Superpower</h3>
            <p>The longer you invest, the more compound interest works for you. Starting at 25 vs. 35 can mean the difference between $1 million and $500,000 at retirement.</p>
            <h3>Getting Started</h3>
            <p>You need surprisingly little to start:</p>
            <ol>
                <li>Open a brokerage account (Vanguard, Fidelity, etc.)</li>
                <li>Start with index funds (low cost, diversified)</li>
                <li>Invest automatically (set and forget)</li>
                <li>Don't check it constantly (avoid emotional decisions)</li>
            </ol>
        </div>`
    },
    "5-0": {
        html: `<div class="article-content">
            <h2>Why Taxes Exist: Understanding the Funding of Society</h2>
            <p>Taxes feel like a burden, but they fund the systems that make modern life possible. Understanding why taxes exist helps you understand your government and economy.</p>
            <h3>The Social Contract</h3>
            <p>Taxes are the price we pay for civilization. They fund:</p>
            <ul>
                <li>Roads and infrastructure</li>
                <li>Police and fire departments</li>
                <li>Military and national defense</li>
                <li>Schools and education</li>
                <li>Healthcare (in many countries)</li>
                <li>Parks and public spaces</li>
            </ul>
            <h3>Without Taxes</h3>
            <p>Imagine a world without taxes:</p>
            <ul>
                <li>No roads (or toll roads everywhere)</li>
                <li>No public safety</li>
                <li>No schools</li>
                <li>Only wealthy people could have security</li>
            </ul>
            <p>Most countries with no income tax (like Saudi Arabia) rely on resource exports. The idea of zero taxes is fantasy.</p>
            <h3>Progressive vs. Regressive Taxes</h3>
            <p><strong>Progressive:</strong> Higher earners pay higher rates (income tax). This is considered fair because those with more ability to pay do.</p>
            <p><strong>Regressive:</strong> Everyone pays the same rate (sales tax). This hits poor people harder because they spend a larger portion of income.</p>
            <h3>Why Tax Rates Vary</h3>
            <p>Different countries have different tax rates based on their philosophy:</p>
            <ul>
                <li>Scandinavian countries: High taxes, extensive social services</li>
                <li>U.S.: Medium taxes, mixed social services</li>
                <li>Singapore: Low taxes, business-focused economy</li>
            </ul>
            <h3>The Tax Debate</h3>
            <p>People disagree on whether taxes are too high or too low. But reasonable people across the spectrum agree:</p>
            <ul>
                <li>Some level of taxation is necessary</li>
                <li>The system should be as fair as possible</li>
                <li>Money should be spent efficiently</li>
            </ul>
            <h3>What You Need to Know</h3>
            <p>For your personal finances:</p>
            <ol>
                <li>Taxes are mandatory (don't avoid them)</li>
                <li>Understanding taxes helps you keep more money</li>
                <li>Tax planning is legal and smart</li>
                <li>Tax evasion is illegal and never worth it</li>
            </ol>
        </div>`
    },
    "6-0": {
        html: `<div class="article-content">
            <h2>Major Financial Decisions: A Framework for Choosing Wisely</h2>
            <p>Life presents several huge financial decisions: Should you buy a house? What car should you get? How much insurance do you need? Here's how to approach them.</p>
            <h3>The Decision Framework</h3>
            <p>For any major financial decision, ask yourself:</p>
            <ol>
                <li><strong>Can I afford it?</strong> (Consider full costs, not just monthly payments)</li>
                <li><strong>Do I need it?</strong> (Distinguish want from need)</li>
                <li><strong>What are the alternatives?</strong> (Consider other options)</li>
                <li><strong>What's the total cost of ownership?</strong> (Include all expenses)</li>
                <li><strong>How does it affect my financial goals?</strong> (Will it help or hurt?)</li>
            </ol>
            <h3>Common Mistakes</h3>
            <ul>
                <li>Only looking at monthly payments (a $400/month car lease sounds okay until you realize it's $4,800/year)</li>
                <li>Emotional decisions (buying based on feelings, not facts)</li>
                <li>Keeping up with others (buying what friends have)</li>
                <li>Not considering opportunity cost (that $50,000 could be invested)</li>
            </ul>
            <h3>Real Examples</h3>
            <p><strong>The Car Decision:</strong> A new car costs $30,000. Over 5 years, add insurance, gas, maintenance: $60,000 total. A 5-year-old used car costs $15,000 with same expenses: $30,000 total. Same transportation, half the cost.</p>
            <p><strong>The House Decision:</strong> Calculate not just the mortgage but property taxes, insurance, maintenance. A $400,000 house might cost $550,000 over 5 years in total expenses.</p>
            <h3>The Opportunity Cost</h3>
            <p>Every dollar spent today is a dollar that could have been invested. If you invest instead of buying, that money could grow 10%+ annually. Missing out on this growth is the real cost of spending.</p>
            <h3>How to Decide</h3>
            <ol>
                <li>Sleep on it (important decisions shouldn't be rushed)</li>
                <li>Research thoroughly</li>
                <li>Talk to people with experience</li>
                <li>Consider your long-term goals</li>
                <li>Make the decision based on facts, not emotion</li>
            </ol>
        </div>`
    },
    "7-0": {
        html: `<div class="article-content">
            <h2>What Is Net Worth? Your Financial Snapshot</h2>
            <p>Net worth is the single most important number in your financial life. It tells you exactly where you stand financially.</p>
            <h3>The Simple Definition</h3>
            <p><strong>Net Worth = Assets - Liabilities</strong></p>
            <p><strong>Assets:</strong> Things you own that have value</p>
            <ul>
                <li>Cash and savings</li>
                <li>House</li>
                <li>Car</li>
                <li>Investments (stocks, bonds)</li>
                <li>Retirement accounts</li>
            </ul>
            <p><strong>Liabilities:</strong> Money you owe</p>
            <ul>
                <li>Mortgage</li>
                <li>Car loans</li>
                <li>Credit card debt</li>
                <li>Student loans</li>
            </ul>
            <h3>Example</h3>
            <p>Assets: $50,000 (savings) + $300,000 (house) + $10,000 (car) = $360,000</p>
            <p>Liabilities: $200,000 (mortgage) + $5,000 (car loan) = $205,000</p>
            <p><strong>Net Worth: $155,000</strong></p>
            <h3>Why Net Worth Matters</h3>
            <p>Net worth is what actually belongs to you. If you sold everything and paid all debts, you'd have $155,000 left.</p>
            <div class="article-callout">💡 <strong>Key Point:</strong> A high income doesn't mean high net worth. Many high earners have negative net worth because they spend everything.</div>
            <h3>Your Net Worth Journey</h3>
            <p>When starting out, your net worth might be negative (more debt than assets). This is okay. The goal is to increase it over time.</p>
            <p>Strategies to increase net worth:</p>
            <ul>
                <li>Earn more money</li>
                <li>Spend less (increase savings)</li>
                <li>Invest (grow asset value)</li>
                <li>Pay off debt (reduce liabilities)</li>
            </ul>
            <h3>Track It</h3>
            <p>Calculate your net worth once a year. Watch it grow. This tangible measurement motivates you to keep building wealth.</p>
        </div>`
    },
    "8-0": {
        html: `<div class="article-content">
            <h2>Why People Overspend: The Psychology Behind It</h2>
            <p>Understanding why you overspend is the first step to controlling it. It's not about willpower—it's about understanding your brain.</p>
            <h3>The Instant Gratification Bias</h3>
            <p>Your brain is wired for immediate rewards. Buying something feels good right now, even if it hurts your future. This is evolutionary—humans evolved for immediate survival, not long-term planning.</p>
            <p>Modern marketing exploits this by making purchases feel urgent and easy.</p>
            <h3>The Sunk Cost Fallacy</h3>
            <p>You bought a gym membership you don't use. To "get your money's worth," you force yourself to go. This is backwards—you already spent the money. The decision should be: do you want to go today?</p>
            <h3>Social Proof and Comparison</h3>
            <p>You buy something because friends have it, or because you see it on Instagram. You're not buying for you—you're buying to match others' status.</p>
            <div class="article-callout">💡 <strong>Reality Check:</strong> Those Instagram people probably go into debt to look rich. Real wealth is invisible.</div>
            <h3>Emotional Spending</h3>
            <p>Stressed? Bored? Sad? Shopping makes you feel better temporarily. But it's a band-aid, not a solution. You feel worse when you see the credit card bill.</p>
            <h3>The "Sale" Trap</h3>
            <p>A "20% off" sign makes you feel like you're saving money even if you weren't planning to buy. You're not saving—you're spending.</p>
            <p><strong>Rule:</strong> If you weren't buying it before the sale, don't buy it because of the sale.</p>
            <h3>How to Counter These Biases</h3>
            <ul>
                <li><strong>Wait 48 hours:</strong> Sleep on purchases over $100</li>
                <li><strong>Track emotions:</strong> Notice when you want to buy because of emotions</li>
                <li><strong>Unfollow:</strong> Avoid Instagram accounts that trigger spending</li>
                <li><strong>Automate savings:</strong> Save before you can spend</li>
                <li><strong>Delete apps:</strong> Make shopping harder, not easier</li>
            </ul>
            <h3>The Real Issue</h3>
            <p>You're not broken. Your brain is just following its programming. Once you understand this, you can design your environment to help you succeed instead of fighting willpower battles.</p>
        </div>`
    }
};
