import { Metadata } from 'next';
import { personalInfo, workExperience, education, skills, hobbies } from '@/data/cv-data';
import CVTimeline from '@/components/cv/CVTimeline';
import CVHeader from '@/components/cv/CVHeader';
import CVSkills from '@/components/cv/CVSkills';
import CVHobbies from '@/components/cv/CVHobbies';

export const metadata: Metadata = {
  title: 'CV | Mihai Adrian Mateescu - Finanzbuchhalter',
  description: 'Curriculum Vitae - Mihai Adrian Mateescu, Finanzbuchhalter mit Erfahrung in der Buchhaltung und Finanzverwaltung',
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <CVHeader personalInfo={personalInfo} />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Berufserfahrung</h2>
          <CVTimeline items={workExperience} type="work" />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Ausbildung</h2>
          <CVTimeline items={education} type="education" />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Fähigkeiten & Kenntnisse</h2>
          <CVSkills skills={skills} />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Hobbies & Interessen</h2>
          <CVHobbies hobbies={hobbies} />
        </section>
      </div>
    </div>
  );
}