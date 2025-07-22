import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import FilterControls from '../FilterControls/FilterControls';
import YearSection from '../YearSection/YearSection';
import TimelineItem from '../TimelineItem/TimelineItem';
import AnalysisSection from '../AnalysisSection/AnalysisSection';
import RiskCard from '../RiskCard/RiskCard';
import Footer from '../Footer/Footer';


import type { Category, YearData, FinancialData, Risk } from '../../Types/timeline';


const timelineData: YearData[] = [
    {
        year: '2010',
        events: [
            { category: 'financial', type: 'positive', date: '2010-01', title: "Early Success with Assassin's Creed Brotherhood", summary: "Ubisoft achieved strong financial performance with Brotherhood's success, establishing the foundation for future franchise expansion." }
        ]
    },
    {
        year: '2011',
        events: [
            { category: 'strategic', type: 'neutral', date: '2011-03', title: "Ubisoft Motion Pictures Founded", summary: "Creation of film production arm to expand IP into new entertainment mediums, later renamed Ubisoft Film & Television." }
        ]
    },
    {
        year: '2012',
        events: [
            { category: 'games', type: 'positive', date: '2012-10', title: "Assassin's Creed III Success", summary: "AC III became one of the best-selling entries, demonstrating the franchise's commercial potential and setting stage for annual releases." }
        ]
    },
    {
        year: '2013',
        events: [
            { category: 'media', type: 'positive', date: '2013-11', title: "Rabbids Invasion TV Series Launch", summary: "First major TV series adaptation on Nickelodeon and France 3, marking entry into animated entertainment." }
        ]
    },
    {
        year: '2014',
        events: [
            { category: 'games', type: 'negative', date: '2014-11', title: "Assassin's Creed Unity Launch Disaster", summary: "Unity launched with severe bugs and performance issues, marking the beginning of quality concerns and damaging franchise reputation." },
            { category: 'games', type: 'neutral', date: '2014-12', title: "The Crew Released", summary: "Racing game launched with always-online requirement, later becoming center of major legal controversy when servers shut down." }
        ]
    },
    {
        year: '2015',
        events: [
            { category: 'games', type: 'positive', date: '2015-12', title: "Rainbow Six Siege Launches", summary: "Tactical shooter initially struggled but became a long-term success, establishing Ubisoft's live-service capabilities." }
        ]
    },
    {
        year: '2016',
        events: [
            { category: 'corporate', type: 'negative', date: '2016-06', title: "Vivendi Hostile Takeover Attempt", summary: "Vivendi accumulated 17.7% stake in attempted hostile takeover, forcing Ubisoft to seek defensive measures and potential partners." },
            { category: 'media', type: 'mixed', date: '2016-12', title: "Assassin's Creed Film Release", summary: "First major film adaptation starring Michael Fassbender grossed $240M but received poor reviews, highlighting adaptation challenges." }
        ]
    },
    {
        year: '2017',
        events: [
            { category: 'games', type: 'positive', date: '2017-10', title: "Assassin's Creed Origins Success", summary: "Major franchise reboot with RPG elements proved successful, establishing new direction for the series." }
        ]
    },
    {
        year: '2018',
        events: [
            { category: 'strategic', type: 'neutral', date: '2018-03', title: "Live Games Development Focus", summary: "Ubisoft announced major shift to live-service model, doubling player activity over two years with continuous content updates." },
            { category: 'games', type: 'positive', date: '2018-10', title: "Assassin's Creed Odyssey Release", summary: "Continued RPG transformation with 100+ hour gameplay, achieving second-best sales in franchise history." }
        ]
    },
    {
        year: '2020',
        events: [
            { category: 'corporate', type: 'negative', date: '2020-06', title: "Sexual Misconduct Scandal Erupts", summary: "#MeToo allegations surface against multiple executives including Serge Hascoët and Tommy François, triggering company-wide crisis." },
            { category: 'corporate', type: 'negative', date: '2020-07', title: "Executive Exodus", summary: "Chief Creative Officer Serge Hascoët and other top executives resign amid harassment allegations, prompting major restructuring." },
            { category: 'games', type: 'positive', date: '2020-11', title: "Assassin's Creed Valhalla Pandemic Success", summary: "Valhalla became highest-selling AC game ever with $1B+ revenue, benefiting from COVID-19 gaming boom." },
            { category: 'media', type: 'positive', date: '2020-10', title: "Netflix Partnership Announced", summary: "Multi-project deal with Netflix for Assassin's Creed adaptations across live-action, animated, and series formats." }
        ]
    },
    {
        year: '2021',
        events: [
            { category: 'strategic', type: 'negative', date: '2021-12', title: "Ubisoft Quartz NFT Platform Launch", summary: "Controversial entry into NFTs with 'Digits' in Ghost Recon Breakpoint, facing massive backlash from employees and community." }
        ]
    },
    {
        year: '2022',
        events: [
            { category: 'corporate', type: 'negative', date: '2022-02', title: "Employee Revolt Over NFTs", summary: "Internal messages show hundreds of negative employee comments about NFT initiative, highlighting internal discord." },
            { category: 'media', type: 'positive', date: '2022-09', title: "Netflix Mobile Games Partnership", summary: "Announcement of three exclusive mobile games for Netflix including new Assassin's Creed title with no ads or microtransactions." }
        ]
    },
    {
        year: '2023',
        events: [
            { category: 'games', type: 'negative', date: '2023-02', title: "The Settlers: New Allies Poor Reception", summary: "Long-delayed strategy game received mixed reviews, continuing pattern of underperforming releases." },
            { category: 'strategic', type: 'negative', date: '2023-11', title: "Renewed NFT Push with Immutable", summary: "Despite previous backlash, Ubisoft partners with Web3 platform Immutable for new NFT gaming experiences." },
            { category: 'games', type: 'mixed', date: '2023-10', title: "Assassin's Creed Mirage Mixed Reception", summary: "Return to classic AC formula received moderate reviews but limited appeal, seen as niche product for existing fans." }
        ]
    },
    {
        year: '2024',
        events: [
            { category: 'legal', type: 'negative', date: '2024-03', title: "The Crew Server Shutdown Controversy", summary: "Servers for The Crew shut down, removing game from players' libraries and sparking major backlash and legal action." },
            { category: 'games', type: 'negative', date: '2024-08', title: "Star Wars Outlaws Underperforms", summary: "High-profile Star Wars game fails to meet sales expectations, contributing to significant revenue decline." },
            { category: 'financial', type: 'mixed', date: '2024-10', title: "Stock Collapse and Acquisition Rumors", summary: "Shares surge 35% on rumors of Tencent-Guillemot buyout after stock loses 80% of value over five years." },
            { category: 'legal', type: 'negative', date: '2024-11', title: "The Crew Class Action Lawsuit Filed", summary: "California gamers file class action over server shutdown, with Ubisoft arguing players only licensed, didn't own games." },
            { category: 'games', type: 'negative', date: '2024-12', title: "XDefiant Shutdown Announced", summary: "Free-to-play shooter to shut down after failing to build sustainable player base, affecting 277 employees." }
        ]
    },
    {
        year: '2025',
        events: [
            { category: 'strategic', type: 'mixed', date: '2025-03', title: "Tencent Subsidiary Formation", summary: "€1.16B Tencent investment creates new subsidiary for AC, Far Cry, and Rainbow Six with 25% Tencent ownership." },
            { category: 'games', type: 'mixed', date: '2025-03', title: "Assassin's Creed Shadows Launch", summary: "Japan-set AC game launches after multiple delays, reaching 3M+ players but facing mixed community sentiment." },
            { category: 'legal', type: 'negative', date: '2025-06', title: "Former Executives Sexual Harassment Trial", summary: "Three former executives including Serge Hascoët found guilty in landmark workplace harassment trial in France." },
            { category: 'corporate', type: 'negative', date: '2025-07', title: "Charlie Guillemot Named Co-CEO", summary: "Yves Guillemot's son appointed co-CEO of Tencent subsidiary, sparking nepotism allegations and family dynasty concerns." },
            { category: 'media', type: 'positive', date: '2025-07', title: "Netflix Assassin's Creed Series Greenlit", summary: "Live-action AC series officially approved for Netflix with Roberto Patino and David Wiener as showrunners." }
        ]
    }
];

const financialData: FinancialData[] = [
    { year: 2020, revenue: '€2.1B (Peak)', stock: '€85 (Peak)', debt: '€600M' },
    { year: 2023, revenue: '€2.0B (Crisis begins)', stock: '€25 (Steep decline)', debt: '€881M' },
    { year: 2024, revenue: '€1.9B (Critical low)', stock: '€15 (Crisis level)', debt: '€1.1B' },
    { year: 2025, revenue: '€1.95B (Slight recovery)', stock: '€12 (Near historic low)', debt: '€1.4B (Critical level)' },
];

const risks: Risk[] = [
    { level: 'high', title: 'Reputational Damage (High)', description: 'Ongoing sexual misconduct scandals and the negative perception from "ownership" disputes (like The Crew server shutdown) severely impact brand image and talent acquisition.' },
    { level: 'high', title: 'Declining Game Quality & Innovation (High)', description: 'Recent releases have received mixed reviews and underperformed, suggesting a struggle to innovate and deliver compelling experiences, leading to franchise fatigue.' },
    { level: 'medium', title: 'Financial Instability (Medium)', description: 'Revenue decline, plummeting stock value, and increasing debt indicate a fragile financial position, making the company vulnerable to market shifts or hostile takeovers.' },
    { level: 'medium', title: 'Live Service & Web3 Strategy (Medium)', description: 'Ubisoft\'s aggressive push into live-service and Web3 (NFTs) has been met with player and employee backlash, risking alienation of core audience and internal discord.' },
    { level: 'low', title: 'Talent Retention (Low to Medium)', description: 'The scandals and strategic missteps could lead to an exodus of key talent, impacting future development and innovation.' },
    { level: 'medium', title: 'Over-reliance on AC Franchise (Medium)', description: 'Despite diversification efforts, Assassin\'s Creed remains a primary revenue driver. Any significant misstep with this franchise could have catastrophic financial consequences.' },
];

const UbisoftAnalysis: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<Category | 'all'>('all');

    const handleFilterChange = (filter: Category | 'all') => {
        setActiveFilter(filter);
    };

    // Filtered timeline data
    const filteredTimelineData = timelineData.map(yearSection => ({
        ...yearSection,
        events: yearSection.events.filter(event =>
            activeFilter === 'all' || event.category === activeFilter
        ),
    })).filter(yearSection => yearSection.events.length > 0);


    return (
        <>
            <Header />
            <Navigation />

            <div className="container">
                <FilterControls activeFilter={activeFilter} onFilterChange={handleFilterChange} />

                <div id="timeline" className="timeline">
                    {filteredTimelineData.map((yearData) => (
                        <YearSection key={yearData.year} year={yearData.year}>
                            <AnimatePresence mode="popLayout"> {/* Use popLayout for smoother transitions when items are added/removed */}
                                {yearData.events.map((event, index) => (
                                    <TimelineItem
                                        key={`${event.date}-${event.title}`} // More robust key, especially with filtering
                                        category={event.category}
                                        type={event.type}
                                        date={event.date}
                                        title={event.title}
                                        summary={event.summary}
                                        index={index} // Pass index for staggering
                                    />
                                ))}
                            </AnimatePresence>
                        </YearSection>
                    ))}
                </div>

                <AnalysisSection id="financial" title="Financial Trajectory (2020-2025)">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
                        <div>
                            <h3>Revenue Decline</h3>
                            <ul style={{ marginLeft: '1rem' }}>
                                {financialData.map((data, index) => (
                                    <li key={index}>{data.year}: {data.revenue}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Stock Performance</h3>
                            <ul style={{ marginLeft: '1rem' }}>
                                {financialData.map((data, index) => (
                                    <li key={index}>{data.year}: {data.stock}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Debt Growth</h3>
                            <ul style={{ marginLeft: '1rem' }}>
                                {financialData.map((data, index) => (
                                    <li key={index}>{data.year}: {data.debt}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div style={{ background: '#f8f9fa', color: "black", padding: '1rem', borderRadius: '5px', marginTop: '1rem' }}>
                        <strong>Key Financial Indicators:</strong>
                        <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                            <li>Net bookings down 51.8% YoY in Q3 2025</li>
                            <li>Digital sales dropped 33.8%</li>
                            <li>Player recurring investment fell 33.7%</li>
                            <li>Debt-to-EBITDA ratio: -21</li>
                        </ul>
                    </div>
                </AnalysisSection>

                <AnalysisSection id="analysis" title="Market Analysis">
                    <p>Ubisoft has historically relied on a few key franchises like Assassin's Creed, Far Cry, and Tom Clancy's series. While these have delivered significant revenue, the market is shifting towards live-service games and new IPs. Ubisoft's attempts to diversify its portfolio, such as with Quartz NFTs and new free-to-play titles, have met mixed results. The company faces stiff competition from other major publishers and agile indie studios, requiring a more innovative and consistent approach to game development and player engagement.</p>
                </AnalysisSection>

                <AnalysisSection id="risks" title="Risk Assessment">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '2rem 0' }}>
                        {risks.map((risk, index) => (
                            <RiskCard key={index} risk={risk} />
                        ))}
                    </div>
                </AnalysisSection>

                <AnalysisSection id="predictions" title="Future Outlook & Predictions (2025-2030)">
                    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '2rem', borderRadius: '10px', margin: '2rem 0' }}>
                        <h2 style={{ color: 'white', borderBottom: '2px solid rgba(255,255,255,0.3)' }}>Future Outlook & Predictions (2025-2030)</h2>
                        <ul style={{ marginLeft: '1rem' }}>
                            <li><b>Increased Tencent Influence:</b> Given the recent investment and subsidiary formation, Tencent's strategic direction and business practices are likely to become more prominent within key Ubisoft franchises.</li>
                            <li><b>Continued Focus on Live Service & Subscriptions:</b> Expect Ubisoft to double down on subscription models (Ubisoft+) and expand live-service offerings for existing and new IPs, potentially moving away from traditional premium releases.</li>
                            <li><b>AI Integration:</b> Significant investment in AI for game development, potentially for procedural content generation, NPC behavior, and even narrative tools, to streamline production and reduce costs.</li>
                            <li><b>IP Revitalization through Media:</b> Successful Netflix series could breathe new life into dormant IPs, opening new revenue streams and attracting new audiences beyond gaming.</li>
                            <li><b>Regulatory Scrutiny:</b> Increased legal challenges and regulatory attention on "digital ownership" in gaming, especially concerning server shutdowns and game removals, could force industry-wide changes.</li>
                            <li><b>Potential Restructuring/Divestment:</b> If financial struggles persist, Ubisoft might consider divesting certain studios or non-core IPs to streamline operations and focus on profitable ventures.</li>
                            <li><b>Uncertain Leadership:</b> The continued presence of the Guillemot family, despite controversies, creates uncertainty around long-term leadership stability and corporate governance.</li>
                        </ul>
                    </div>
                </AnalysisSection>

                <AnalysisSection id="recommendations" title="Recommendations for Future Success">
                    <ul style={{ marginLeft: '1rem' }}>
                        <li><b>Prioritize Quality Over Quantity:</b> Reduce the number of annual releases and focus resources on delivering highly polished, innovative, and critically acclaimed titles.</li>
                        <li><b>Rebuild Player Trust:</b> Address past missteps transparently, particularly regarding game ownership and server shutdowns. Implement clearer communication and more player-friendly policies.</li>
                        <li><b>Diversify Beyond Flagship IPs (Carefully):</b> Invest in new, original IPs that are not reliant on established franchises, but do so with a strong creative vision and thorough market research.</li>
                        <li><b>Re-evaluate Web3 Strategy:</b> Pause or significantly retool NFT/blockchain initiatives based on genuine player interest and clear value propositions, rather than speculative trends.</li>
                        <li><b>Foster a Healthy Work Culture:</b> Continue to address and resolve workplace harassment issues, promoting diversity, inclusion, and a safe environment for all employees.</li>
                        <li><b>Leverage Strategic Partnerships:</b> Utilize the Tencent partnership for market expansion in Asia and leverage media deals (like Netflix) to broaden brand appeal globally.</li>
                        <li><b>Embrace Open Development:</b> Engage with player communities earlier and more frequently in the development process to incorporate feedback and build anticipation.</li>
                    </ul>
                </AnalysisSection>


                <AnalysisSection id="public-sources" title="Sources">
                    <ul style={{ marginLeft: '1rem' }}>
                        <li><b>Prioritize Quality Over Quantity:</b> Reduce the number of annual releases and focus resources on delivering highly polished, innovative, and critically acclaimed titles.</li>
                        <li><b>Rebuild Player Trust:</b> Address past missteps transparently, particularly regarding game ownership and server shutdowns. Implement clearer communication and more player-friendly policies.</li>
                        <li><b>Diversify Beyond Flagship IPs (Carefully):</b> Invest in new, original IPs that are not reliant on established franchises, but do so with a strong creative vision and thorough market research.</li>
                        <li><b>Re-evaluate Web3 Strategy:</b> Pause or significantly retool NFT/blockchain initiatives based on genuine player interest and clear value propositions, rather than speculative trends.</li>
                        <li><b>Foster a Healthy Work Culture:</b> Continue to address and resolve workplace harassment issues, promoting diversity, inclusion, and a safe environment for all employees.</li>
                        <li><b>Leverage Strategic Partnerships:</b> Utilize the Tencent partnership for market expansion in Asia and leverage media deals (like Netflix) to broaden brand appeal globally.</li>
                        <li><b>Embrace Open Development:</b> Engage with player communities earlier and more frequently in the development process to incorporate feedback and build anticipation.</li>
                    </ul>
                </AnalysisSection>
            </div>

            <Footer />
        </>
    );
};

export default UbisoftAnalysis;