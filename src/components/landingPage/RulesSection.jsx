import React from 'react';
import { Shield, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

const rules = [
  {
    icon: Shield,
    title: "Fair Play Policy",
    description: "All players must adhere to our strict fair play policy. Any form of cheating or exploitation will result in immediate account suspension.",
    type: "critical"
  },
  {
    icon: AlertTriangle,
    title: "Account Sharing",
    description: "Account sharing is strictly prohibited. Each account should be used by a single player only.",
    type: "warning"
  },
  {
    icon: CheckCircle2,
    title: "Tournament Participation",
    description: "Players must be at least level 10 and have completed account verification to participate in tournaments.",
    type: "success"
  },
  {
    icon: XCircle,
    title: "Toxic Behavior",
    description: "Zero tolerance for toxic behavior, harassment, or discrimination. Violations will lead to permanent bans.",
    type: "danger"
  }
];

export default function RulesSection() {
  return (
    <section id="rules" className="py-32 bg-white/5 dark:bg-gray-800/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Community Rules
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          To maintain a fair and enjoyable gaming environment, all members must follow these essential rules.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {rules.map((rule, index) => (
            <div key={index} className="gradient-border p-1">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg h-full">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    rule.type === 'critical' ? 'bg-red-500/10 text-red-500' :
                    rule.type === 'warning' ? 'bg-yellow-500/10 text-yellow-500' :
                    rule.type === 'success' ? 'bg-green-500/10 text-green-500' :
                    'bg-gray-500/10 text-gray-500'
                  }`}>
                    <rule.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{rule.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{rule.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}