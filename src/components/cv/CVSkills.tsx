'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

interface CVSkillsProps {
  skills: {
    technical: string[];
    leadership: {
      type: string;
      experience: string;
      teamSize: string;
    };
    languages: Array<{ name: string; level: string }>;
    drivingLicense: string;
  };
}

export default function CVSkills({ skills }: CVSkillsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card variant="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">💻</span>
            Technische Fähigkeiten
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {skills.technical.map((skill, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span className="text-sm">{skill}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card variant="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">👥</span>
            Führungskompetenzen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-primary mb-1">Leitungsarten</h4>
            <p className="text-sm text-muted">{skills.leadership.type}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-primary mb-1">Erfahrung</h4>
            <p className="text-sm text-muted">{skills.leadership.experience}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-primary mb-1">Personalverantwortung</h4>
            <p className="text-sm text-muted">{skills.leadership.teamSize}</p>
          </div>
        </CardContent>
      </Card>

      <Card variant="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            Sprachen & Führerschein
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-primary mb-2">Sprachen</h4>
              <ul className="space-y-2">
                {skills.languages.map((lang, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-medium">{lang.name}:</span>{' '}
                    <span className="text-muted">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-primary mb-1">Führerschein</h4>
              <p className="text-sm text-muted flex items-center gap-2">
                <span className="text-lg">🚗</span>
                {skills.drivingLicense}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}