const QUIZZES = {
    "0-6": [
        {
            q: "What are the three functions of money?",
            options: [
                "Medium of exchange, store of value, unit of account",
                "Saving, spending, investing",
                "Earning, saving, planning",
                "Trading, storage, measurement"
            ],
            correct: 0,
            explain: "Money serves as a medium of exchange (trade), store of value (save), and unit of account (price measure)."
        },
        {
            q: "Fiat currency gets its value from:",
            options: [
                "Gold reserves",
                "Government authority and public trust",
                "Commodity backing",
                "Banking institutions"
            ],
            correct: 1,
            explain: "Modern money (fiat) has value only because governments declare it and society agrees it's valuable."
        },
        {
            q: "Which of these was NOT used as commodity money historically?",
            options: [
                "Salt",
                "Livestock",
                "Shells",
                "Digital tokens"
            ],
            correct: 3,
            explain: "Digital tokens are too recent. Salt, livestock, and shells were all used as commodity money in ancient times."
        },
        {
            q: "What ended in 1971?",
            options: [
                "Paper money",
                "The gold standard",
                "Inflation",
                "Banking"
            ],
            correct: 1,
            explain: "The U.S. abandoned the gold standard in 1971, making the dollar purely fiat currency."
        },
        {
            q: "Which country invented paper money?",
            options: [
                "Greece",
                "Rome",
                "China",
                "Arabia"
            ],
            correct: 2,
            explain: "China invented paper money around 700 CE as receipts for coin deposits."
        }
    ],
    "1-6": [
        {
            q: "The 50/30/20 rule allocates income as:",
            options: [
                "50% investing, 30% saving, 20% spending",
                "50% needs, 30% wants, 20% savings",
                "50% wants, 30% needs, 20% savings",
                "50% spending, 30% saving, 20% investing"
            ],
            correct: 1,
            explain: "The 50/30/20 rule helps balance essential needs, enjoyable wants, and saving."
        },
        {
            q: "Fixed expenses include:",
            options: [
                "Dining out and entertainment",
                "Subscriptions and variable purchases",
                "Housing, insurance, and utilities",
                "Gifts and hobbies"
            ],
            correct: 2,
            explain: "Fixed expenses stay the same monthly (rent, insurance). Variable expenses change (food, entertainment)."
        },
        {
            q: "Most people without a budget spend ___% more than they realize:",
            options: [
                "10%",
                "20%",
                "30%",
                "50%"
            ],
            correct: 2,
            explain: "Studies show people without budgets spend about 30% more than they think they do."
        },
        {
            q: "The best way to start budgeting is:",
            options: [
                "Use complex software",
                "Write income and expenses on paper",
                "Hire a financial advisor",
                "Track every penny for a year"
            ],
            correct: 1,
            explain: "Start simple. Complex systems create barriers to action. Simple wins."
        },
        {
            q: "Lifestyle inflation is when:",
            options: [
                "Prices increase annually",
                "Your spending grows with your income",
                "You buy inflation-protected bonds",
                "Your budget becomes too tight"
            ],
            correct: 1,
            explain: "Lifestyle inflation is the trap where income increases lead to spending increases, preventing savings growth."
        }
    ],
    "2-6": [
        {
            q: "An emergency fund should cover:",
            options: [
                "1 month of expenses",
                "3-6 months of expenses",
                "1 year of expenses",
                "Only unexpected emergencies"
            ],
            correct: 1,
            explain: "3-6 months covers job loss, medical emergencies, and major repairs."
        },
        {
            q: "Why do high-yield savings accounts matter?",
            options: [
                "They're safer",
                "They offer better interest rates",
                "They're easier to access",
                "They have no withdrawal limits"
            ],
            correct: 1,
            explain: "HYSAs earn 4-5% vs. regular savings accounts at 0.01-0.1%."
        },
        {
            q: "Automating savings helps because:",
            options: [
                "It increases interest rates",
                "You save first, then spend",
                "It reduces taxes",
                "Banks give better terms"
            ],
            correct: 1,
            explain: "Automatic transfers mean you save before temptation to spend strikes."
        },
        {
            q: "$100/month saved at 5% for 20 years equals approximately:",
            options: [
                "$24,000",
                "$36,800",
                "$50,000",
                "$100,000"
            ],
            correct: 1,
            explain: "Compound interest turns $24,000 contributed into $36,800. Powerful!"
        },
        {
            q: "What's better for emergency funds?",
            options: [
                "Invested in stocks",
                "Hidden in cash",
                "In accessible, safe accounts",
                "Borrowed from friends"
            ],
            correct: 2,
            explain: "Emergency funds need to be accessible and safe, not invested in volatile assets."
        }
    ],
    "3-6": [
        {
            q: "A credit score is determined by:",
            options: [
                "Your income",
                "Payment history, credit utilization, account age, and inquiries",
                "How much money you have",
                "Your job title"
            ],
            correct: 1,
            explain: "Credit scores measure creditworthiness, not income or status."
        },
        {
            q: "What's APR?",
            options: [
                "Annual Payment Rate",
                "Annual Percentage Rate",
                "Average Payback Ratio",
                "Account Performance Review"
            ],
            correct: 1,
            explain: "APR shows the yearly cost of borrowing, including all fees."
        },
        {
            q: "A $5,000 credit card balance at 20% APR costs monthly:",
            options: [
                "$83",
                "$100",
                "$150",
                "$200"
            ],
            correct: 1,
            explain: "20% ÷ 12 months × $5,000 = roughly $83/month in interest alone."
        },
        {
            q: "Good Debt typically includes:",
            options: [
                "Credit card balances",
                "Car loans for luxury vehicles",
                "Mortgages and education loans",
                "Payday loans"
            ],
            correct: 2,
            explain: "Good debt finances appreciating assets or income-generating education."
        },
        {
            q: "To improve your credit score, you should:",
            options: [
                "Get new credit cards",
                "Pay bills late to show you're independent",
                "Pay on time and keep balances low",
                "Close old accounts"
            ],
            correct: 2,
            explain: "Payment history is 35% of your score. Paying on time is key."
        }
    ],
    "4-6": [
        {
            q: "The stock market historically returns about:",
            options: [
                "2% annually",
                "5% annually",
                "10% annually",
                "20% annually"
            ],
            correct: 2,
            explain: "Long-term average S&P 500 return is approximately 10% annually."
        },
        {
            q: "What is compound interest?",
            options: [
                "Interest on interest",
                "Interest paid twice yearly",
                "Interest on loans only",
                "Interest in compound form"
            ],
            correct: 0,
            explain: "Compound interest is when earnings generate their own earnings—the most powerful wealth tool."
        },
        {
            q: "$10,000 invested at 10% for 30 years becomes approximately:",
            options: [
                "$40,000",
                "$130,000",
                "$174,000",
                "$300,000"
            ],
            correct: 2,
            explain: "Compound interest turns $10,000 into $174,000—that's the power of time."
        },
        {
            q: "Index funds are popular because they:",
            options: [
                "Guarantee returns",
                "Are simple and have low costs",
                "Beat the market consistently",
                "Are only for wealthy investors"
            ],
            correct: 1,
            explain: "Index funds cost less, require no research, and match market returns reliably."
        },
        {
            q: "The best time to start investing is:",
            options: [
                "When you have $10,000 minimum",
                "When the market is rising",
                "Tomorrow",
                "As soon as possible"
            ],
            correct: 3,
            explain: "Time is your biggest advantage. Even small amounts invested early beat large amounts invested later."
        }
    ],
    "5-6": [
        {
            q: "Progressive tax means:",
            options: [
                "Taxes increase every year",
                "Higher earners pay higher rates",
                "Everyone pays the same rate",
                "Taxes are always increasing"
            ],
            correct: 1,
            explain: "Progressive taxes mean higher income = higher tax rate, considered more fair."
        },
        {
            q: "Your paycheck shows withholding because:",
            options: [
                "Your employer is saving for you",
                "The government requires advance tax payment",
                "You're bad at managing money",
                "It's optional and you can refuse"
            ],
            correct: 1,
            explain: "Withholding is required. Taxes are taken from paychecks to estimate annual obligations."
        },
        {
            q: "Tax brackets mean:",
            options: [
                "You pay one rate on all income",
                "Different income levels are taxed at different rates",
                "Rich people pay less tax",
                "Tax is the same for everyone"
            ],
            correct: 1,
            explain: "You move through brackets as income increases. Each bracket has its own rate."
        },
        {
            q: "A common tax mistake is:",
            options: [
                "Paying too much tax",
                "Not claiming all deductions",
                "Filing too early",
                "Using a tax preparer"
            ],
            correct: 1,
            explain: "Many people leave money on the table by not claiming eligible deductions."
        },
        {
            q: "Tax planning is:",
            options: [
                "Illegal tax avoidance",
                "Complicated and unnecessary",
                "Legal way to reduce tax burden",
                "Only for wealthy people"
            ],
            correct: 2,
            explain: "Tax planning (using 401k, etc.) is legal and smart for everyone."
        }
    ],
    "6-6": [
        {
            q: "When evaluating a major purchase, ask yourself:",
            options: [
                "Can I afford the monthly payment?",
                "What will my friends think?",
                "Can I afford it + what are alternatives + what's total cost?",
                "Is it on sale?"
            ],
            correct: 2,
            explain: "Consider affordability, alternatives, and total cost of ownership."
        },
        {
            q: "Renting vs. buying: buying makes sense when:",
            options: [
                "You plan to stay 5+ years",
                "Interest rates are low",
                "You can afford 20% down",
                "All of the above"
            ],
            correct: 3,
            explain: "All factors matter. Renting is better for flexibility; buying builds equity."
        },
        {
            q: "A car's total cost includes:",
            options: [
                "Just the purchase price",
                "Purchase + insurance + gas + maintenance",
                "Monthly payment only",
                "Down payment only"
            ],
            correct: 1,
            explain: "A $30,000 car might cost $50,000+ over 5 years total."
        },
        {
            q: "Insurance protects against:",
            options: [
                "All financial losses",
                "Catastrophic losses you can't afford",
                "Only minor expenses",
                "Investment losses"
            ],
            correct: 1,
            explain: "Insurance covers major unexpected costs that would otherwise destroy finances."
        },
        {
            q: "To negotiate salary, you should:",
            options: [
                "Accept the first offer",
                "Research market rates and make a case",
                "Demand more aggressively",
                "Accept what you're offered quietly"
            ],
            correct: 1,
            explain: "Research comparable salaries and present your case professionally. Negotiation is expected."
        }
    ],
    "7-6": [
        {
            q: "Net worth is calculated as:",
            options: [
                "Income minus expenses",
                "Assets minus liabilities",
                "Savings minus debt",
                "Income plus investments"
            ],
            correct: 1,
            explain: "Net worth = everything you own minus everything you owe."
        },
        {
            q: "An asset is something that:",
            options: [
                "You owe money on",
                "Has value and you own",
                "Costs money to maintain",
                "You use daily"
            ],
            correct: 1,
            explain: "Assets are things you own that have value (house, car, investments)."
        },
        {
            q: "Building wealth requires:",
            options: [
                "High income only",
                "Low income and low spending",
                "Income minus expenses, invested",
                "Winning the lottery"
            ],
            correct: 2,
            explain: "Wealth = (income - expenses) invested over time. All three factors matter."
        },
        {
            q: "Retirement accounts are important because:",
            options: [
                "They're required",
                "Tax advantages + compound interest",
                "You can withdraw anytime",
                "They guarantee returns"
            ],
            correct: 1,
            explain: "401k and IRA accounts offer tax benefits and decades of compounding."
        },
        {
            q: "Your net worth should increase by:",
            options: [
                "Earning more money only",
                "Spending less only",
                "Earning more + spending less + investing",
                "None of the above"
            ],
            correct: 2,
            explain: "All three strategies together build net worth fastest."
        }
    ],
    "8-6": [
        {
            q: "Emotional spending happens when you:",
            options: [
                "Need something",
                "Research and plan",
                "Buy to feel better",
                "Invest carefully"
            ],
            correct: 2,
            explain: "Emotional spending uses shopping as a temporary mood fix."
        },
        {
            q: "The '48-hour rule' means:",
            options: [
                "Wait 48 hours before buying anything",
                "Wait 48 hours for big purchases over $100",
                "Shop for 48 hours straight",
                "All purchases expire in 48 hours"
            ],
            correct: 1,
            explain: "Waiting 48 hours lets emotion fade and helps you decide rationally."
        },
        {
            q: "Social proof in spending is:",
            options: [
                "Proof you're rich",
                "Buying because others do",
                "Scientific evidence",
                "Social security proof"
            ],
            correct: 1,
            explain: "You buy things to match others' status, often without realizing it."
        },
        {
            q: "A 'sale' psychologically makes you:",
            options: [
                "Save money",
                "Feel like you're saving when you're actually spending",
                "More careful",
                "Richer"
            ],
            correct: 1,
            explain: "Sales trigger buying psychology. You're not saving by buying—you're just spending."
        },
        {
            q: "To reduce overspending, you should:",
            options: [
                "Use more willpower",
                "Design your environment to help you succeed",
                "Ignore your emotions",
                "Never buy anything fun"
            ],
            correct: 1,
            explain: "Change your environment (delete apps, unfollow, automate savings). Willpower is temporary."
        }
    ]
};
