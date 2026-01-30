# Dhruvin's Portfolio - Quick Update Guide

## 🎯 How to Add/Update Your Projects

All your portfolio content is controlled by one easy-to-edit file:

### 📁 File Location
`/app/frontend/src/data/mockData.js`

---

## ✏️ Adding New Projects

1. Open `/app/frontend/src/data/mockData.js`
2. Find the `projects` array (around line 67)
3. Copy this template and add it to the array:

```javascript
{
  id: 4, // Increment this number
  title: "Your Project Name",
  description: "Brief description of what this project does and the problem it solves.",
  techStack: ["React", "Node.js", "MongoDB"], // Add technologies used
  liveUrl: "https://your-project-url.com", // Leave empty "" if no live demo
  githubUrl: "https://github.com/Dhruvin-3/your-repo", // Leave empty "" if private
  image: "https://images.unsplash.com/photo-XXXXXX", // Project screenshot URL
  featured: true, // true = show prominently, false = regular display
  status: "Completed" // "Completed" or "In Progress"
}
```

### 📸 Getting Project Images

**Option 1: Use Unsplash (Free)**
- Visit https://unsplash.com
- Search for relevant keywords (e.g., "web development", "app design")
- Right-click image → Copy image address
- Paste URL in the `image` field

**Option 2: Upload Your Own**
- Place your image in `/app/frontend/public/` folder
- Use path: `"/your-image-name.png"`

---

## 🔄 Updating Your Information

### Personal Info (Lines 5-18)
```javascript
export const personalInfo = {
  fullName: "Dhruvin Hirenbhai Mehta",
  email: "dhruvinmehta003@gmail.com", // Update your email
  phone: "+91 XXXXX XXXXX", // Add your phone number
  // ... update other fields as needed
}
```

### Adding Skills (Lines 20-48)
Add new skills to any category:
```javascript
{ name: "TypeScript", icon: "Code" }, // Add after existing skills
```

Available icons from lucide-react: `Code`, `Code2`, `Server`, `Database`, `GitBranch`, `Github`, `Terminal`, etc.
Full list: https://lucide.dev/icons/

### Updating Experience (Lines 50-95)
Add new job experience or update current roles in the `experience` array.

---

## 📄 Adding Your Resume

1. Save your resume PDF as `resume.pdf`
2. Place it in `/app/frontend/public/` folder
3. The "Download Resume" button will automatically work!

---

## 🎨 Design Features

- **Dark/Light Mode**: Toggle in the top-right corner (moon/sun icon)
- **Smooth Scrolling**: Click any nav link to scroll smoothly to that section
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Professional Colors**: Monochrome design with blue accents

---

## 🚀 After Making Changes

The website updates automatically! Just:
1. Save your changes in `mockData.js`
2. Refresh your browser
3. Your updates will appear instantly!

---

## 📝 Quick Tips

✅ **DO:**
- Use high-quality project screenshots
- Write clear, concise project descriptions
- Keep skill lists relevant and up-to-date
- Add GitHub links when possible (shows you're open-source friendly)

❌ **DON'T:**
- Use very large images (keep under 1MB for fast loading)
- Add more than 10-12 skills per category (keep it focused)
- Leave placeholder text (update everything with your real info)

---

## 🆘 Need Help?

Common issues:
- **Image not showing**: Check URL is correct and publicly accessible
- **Button not working**: Verify URLs start with `https://` or `http://`
- **Changes not visible**: Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

---

## 🎯 Deployment Checklist

Before deploying to Vercel or other platforms:

- [ ] Update email in `mockData.js`
- [ ] Add your resume PDF to `/app/frontend/public/`
- [ ] Add at least 3-5 real projects
- [ ] Update all project images
- [ ] Add your real phone number (optional)
- [ ] Test contact form
- [ ] Verify all external links work
- [ ] Test dark/light mode toggle

---

**Built with React & Next.js** ⚛️
Modern, fast, and SEO-optimized for recruiters and clients!
