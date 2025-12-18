import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { SignLanguageGestures } from '@/entities';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function GesturesPage() {
  const [gestures, setGestures] = useState<SignLanguageGestures[]>([]);
  const [filteredGestures, setFilteredGestures] = useState<SignLanguageGestures[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  useEffect(() => {
    const fetchGestures = async () => {
      const { items } = await BaseCrudService.getAll<SignLanguageGestures>('signlanguagegestures');
      setGestures(items);
      setFilteredGestures(items);
    };
    fetchGestures();
  }, []);

  useEffect(() => {
    let filtered = gestures;

    if (searchTerm) {
      filtered = filtered.filter(
        (gesture) =>
          gesture.gestureName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          gesture.textTranslation?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter((gesture) => gesture.gestureCategory === categoryFilter);
    }

    if (difficultyFilter !== 'all') {
      filtered = filtered.filter((gesture) => gesture.difficultyLevel === difficultyFilter);
    }

    setFilteredGestures(filtered);
  }, [searchTerm, categoryFilter, difficultyFilter, gestures]);

  const categories = Array.from(new Set(gestures.map((g) => g.gestureCategory).filter(Boolean)));
  const difficulties = Array.from(new Set(gestures.map((g) => g.difficultyLevel).filter(Boolean)));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-secondary text-secondary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-6xl lg:text-8xl uppercase tracking-tight mb-6 leading-none">
              GESTURE
              <br />
              LIBRARY
            </h1>
            <p className="font-paragraph text-xl max-w-3xl leading-relaxed">
              Explore our comprehensive collection of sign language gestures. Each gesture is carefully documented with visual references, translations, and difficulty levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="w-full border-b border-secondary/10">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="font-heading text-sm uppercase mb-2 block text-secondary tracking-wide">
                Search Gestures
              </label>
              <Input
                type="text"
                placeholder="Search by name or translation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="font-paragraph"
              />
            </div>

            <div>
              <label className="font-heading text-sm uppercase mb-2 block text-secondary tracking-wide">
                Category
              </label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="font-paragraph">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category || ''}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="font-heading text-sm uppercase mb-2 block text-secondary tracking-wide">
                Difficulty
              </label>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="font-paragraph">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty || ''}>
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-paragraph text-sm text-secondary/60">
              Showing {filteredGestures.length} of {gestures.length} gestures
            </p>
          </div>
        </div>
      </section>

      {/* Gestures Grid */}
      <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {filteredGestures.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-heading text-2xl uppercase text-secondary/40 tracking-tight">
              No gestures found
            </p>
            <p className="font-paragraph text-base text-secondary/60 mt-4">
              Try adjusting your filters or search terms
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGestures.map((gesture, index) => (
              <motion.div
                key={gesture._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="border-2 border-secondary/10 overflow-hidden hover:border-primary transition-colors">
                  {gesture.gestureImage && (
                    <div className="h-64 overflow-hidden bg-secondary/5">
                      <Image
                        src={gesture.gestureImage}
                        alt={gesture.gestureName || 'Gesture'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width={400}
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-heading text-2xl uppercase tracking-tight text-secondary">
                        {gesture.gestureName}
                      </h3>
                      {gesture.difficultyLevel && (
                        <span
                          className={`font-heading text-xs uppercase px-3 py-1 ${
                            gesture.difficultyLevel.toLowerCase() === 'easy'
                              ? 'bg-highlightyellow text-secondary'
                              : gesture.difficultyLevel.toLowerCase() === 'medium'
                              ? 'bg-secondary text-secondary-foreground'
                              : 'bg-primary text-primary-foreground'
                          }`}
                        >
                          {gesture.difficultyLevel}
                        </span>
                      )}
                    </div>

                    {gesture.textTranslation && (
                      <div className="mb-4">
                        <p className="font-paragraph text-lg text-secondary font-medium">
                          "{gesture.textTranslation}"
                        </p>
                      </div>
                    )}

                    {gesture.gestureCategory && (
                      <div className="mb-4">
                        <span className="font-heading text-xs uppercase text-secondary/60 tracking-wide">
                          {gesture.gestureCategory}
                        </span>
                      </div>
                    )}

                    {gesture.gestureDescription && (
                      <p className="font-paragraph text-sm text-secondary/70 leading-relaxed">
                        {gesture.gestureDescription}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Info Section */}
      <section className="w-full bg-highlightyellow">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl lg:text-6xl uppercase tracking-tight text-secondary mb-6 leading-none">
                LEARNING
                <br />
                MADE SIMPLE
              </h2>
              <p className="font-paragraph text-lg text-secondary/80 leading-relaxed">
                Our gesture library is designed to support learners at all levels. Each gesture includes detailed descriptions, visual demonstrations, and difficulty ratings to guide your learning journey.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary text-secondary-foreground p-6">
                <h3 className="font-heading text-xl uppercase mb-2 tracking-tight">
                  VISUAL GUIDES
                </h3>
                <p className="font-paragraph text-sm leading-relaxed">
                  High-quality images showing proper hand positioning and movement for each gesture.
                </p>
              </div>

              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="font-heading text-xl uppercase mb-2 tracking-tight">
                  CATEGORIZED
                </h3>
                <p className="font-paragraph text-sm leading-relaxed">
                  Organized by category and difficulty to help you progress systematically.
                </p>
              </div>

              <div className="bg-secondary text-secondary-foreground p-6">
                <h3 className="font-heading text-xl uppercase mb-2 tracking-tight">
                  COMPREHENSIVE
                </h3>
                <p className="font-paragraph text-sm leading-relaxed">
                  Covering commonly used alphabets, words, and phrases in sign language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
